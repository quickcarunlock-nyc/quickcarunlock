import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // Run on Cloudflare Workers/Pages

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string || 'Not provided';
    const phone = formData.get('phone') as string || 'Not provided';
    const location = formData.get('location') as string || 'Not provided';
    const vehicle = formData.get('vehicle') as string || 'Not provided';
    const issue = formData.get('issue') as string || 'Not provided';
    const image = formData.get('image') as File | null;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing Telegram environment variables.");
      return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
    }

    const message = `🚨 *New Lead: QuickCarUnlock.com* 🚨\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${location}\n*Vehicle:* ${vehicle}\n*Issue:* ${issue}`;

    let url = `https://api.telegram.org/bot${botToken}`;

    if (image && image.size > 0) {
      // Send Photo with caption
      url += '/sendPhoto';
      const tgFormData = new FormData();
      tgFormData.append('chat_id', chatId);
      tgFormData.append('photo', image);
      tgFormData.append('caption', message);
      tgFormData.append('parse_mode', 'Markdown');

      const response = await fetch(url, {
        method: 'POST',
        body: tgFormData
      });

      if (!response.ok) {
        throw new Error(`Telegram API Error: ${response.statusText}`);
      }
    } else {
      // Send Text Message
      url += '/sendMessage';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (!response.ok) {
        throw new Error(`Telegram API Error: ${response.statusText}`);
      }
    }

    return NextResponse.json({ success: true, message: 'Request sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return NextResponse.json({ success: false, message: 'Failed to send request.' }, { status: 500 });
  }
}
