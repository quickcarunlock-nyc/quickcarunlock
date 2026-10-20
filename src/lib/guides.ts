export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
};

export type Guide = {
  slug: string;
  title: string;          // H1
  metaTitle: string;
  metaDescription: string;
  summary: string;        // shown on the /guides index and as the lead paragraph
  datePublished: string;
  dateModified: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

const D = '2026-10-20';

export const guides: Guide[] = [
  {
    slug: 'will-police-unlock-my-car',
    title: 'Will the Police or Fire Department Unlock Your Car in NYC?',
    metaTitle: 'Will Police or Fire Unlock Your Car in NYC?',
    metaDescription:
      'Locked out in NYC? Learn when police or fire will help (emergencies only), when to call 911, and who to call for a routine lockout.',
    summary:
      'For a routine lockout, usually no. Police and fire crews focus on emergencies, so a locksmith or roadside assistance is the right call. If a child, person or animal is trapped inside, call 911 immediately.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'In general, police and fire departments do not unlock cars for routine lockouts. Their job is to respond to emergencies, and keys locked in a car, with nobody at risk, is not one. Policies can differ by location and situation, so a dispatcher may handle your case differently, but you should not count on it.',
          'What changes the answer is risk. If a child, a person who needs help, or a pet is inside the locked car, treat it as an emergency and call 911 right away.',
        ],
      },
      {
        heading: 'When to call 911',
        list: [
          'A child or infant is inside the locked car.',
          'A pet is inside, especially in warm weather.',
          'A person inside is unwell, unresponsive or in danger.',
          'The engine is running in a closed space, or there is another immediate safety hazard.',
        ],
      },
      {
        heading: 'Who to call for a routine lockout',
        paragraphs: [
          'If nobody is in danger, these are the realistic options, roughly in the order most people try them:',
        ],
        list: [
          'Roadside assistance: AAA, your auto insurer, your car manufacturer’s plan, or a credit-card benefit may include lockout service. Check before you pay out of pocket, but ask about the wait time.',
          'A [mobile locksmith](/services/emergency-lockout): a locksmith comes to the car and opens it, usually without damage. This is often the fastest option when you need to move now.',
          'A spare key: if someone can bring one, that can be the cheapest fix, depending on how far away they are.',
          'The dealership: usually not the quickest path for a simple lockout, since the car would need to be towed.',
        ],
      },
      {
        heading: 'What to have ready when you call a locksmith',
        list: [
          'The exact location, including cross streets and which side of the street.',
          'The year, make and model of the vehicle.',
          'A photo ID and your registration or insurance card showing your name.',
          'Whether the key is a metal key, a transponder key or a push-to-start fob.',
        ],
      },
      {
        heading: 'Avoid the coat-hanger approach',
        paragraphs: [
          'Wire hangers and similar tools can damage weather stripping, scratch paint or interfere with door wiring and airbag components. If you cannot wait for help, calling a professional is usually cheaper than a repair.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Will the NYPD unlock my car for free?',
        a: 'Generally not for a routine lockout. If someone or something is trapped in danger inside, call 911 and say so.',
      },
      {
        q: 'Will the fire department unlock my car?',
        a: 'Fire crews respond to emergencies such as a trapped child or pet. A routine lockout is usually directed to a locksmith or roadside assistance.',
      },
      {
        q: 'Who is the fastest to call for a car lockout?',
        a: 'A mobile locksmith is often the quickest, because it comes to the car. Roadside assistance can also work, so ask for the ETA before you decide.',
      },
    ],
    related: [
      { href: '/services/emergency-lockout', label: 'Emergency car lockout service in NYC' },
      { href: '/guides/locked-keys-in-car-what-to-do', label: 'Locked keys in your car: what to do right now' },
      { href: '/guides/how-much-does-it-cost-to-unlock-a-car-nyc', label: 'How much does it cost to unlock a car in NYC?' },
    ],
  },
  {
    slug: 'how-much-does-it-cost-to-unlock-a-car-nyc',
    title: 'How Much Does It Cost to Unlock a Car in NYC?',
    metaTitle: 'Car Unlock Cost in NYC: Price Guide',
    metaDescription:
      'What a car lockout costs in NYC, what changes the price, and how to avoid surprise fees. Our standard unlocks start from $55, quoted before work begins.',
    summary:
      'Quick Car Unlock standard unlocks start from $55, and the exact price is quoted before work begins. What you actually pay depends on the vehicle, the job and the time and place.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Our starting prices',
        paragraphs: [
          'These are starting estimates. The exact price depends on your vehicle and your location, and it is quoted before any work begins.',
        ],
        list: [
          'Emergency car unlock: from $55',
          'Key replacement: from $120',
          'Fob programming: from $145',
          'Ignition repair: from $150',
        ],
      },
      {
        heading: 'What changes the price of a car lockout',
        list: [
          'The vehicle: older cars with manual locks are usually simpler than newer keyless models with high-security locks.',
          'The job: opening a door, opening a trunk, extracting a broken key and making a new key are different jobs.',
          'The time: late-night, early-morning and holiday calls can cost more at many companies, so ask.',
          'The location: a hard-to-reach spot, a garage with restricted access or a long trip can affect the quote.',
          'Whether you also need a key: opening the car and cutting or programming a new key are priced separately.',
        ],
      },
      {
        heading: 'How to avoid surprise fees',
        list: [
          'Ask for the full price over the phone, including any call-out or travel charge, before anyone is sent.',
          'Ask whether the quoted price is a firm price or a starting price, and what could change it.',
          'Be wary of any locksmith who quotes a very low number on the phone and then raises it on arrival.',
          'Be wary if a technician insists on drilling the lock for a standard car lockout. Ask why, and get the price in writing first.',
          'Ask for a receipt, especially if you plan to claim it from insurance or a roadside plan.',
        ],
      },
      {
        heading: 'Cheaper options to check first',
        paragraphs: [
          'Before you pay for a lockout, check whether you have roadside assistance through your insurer, a car-maker plan, AAA or a credit card. If you do, ask about the wait time. If you need to move now, a mobile locksmith with a firm quote may be worth the difference.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does a car unlock cost in NYC?',
        a: 'Our standard unlocks start from $55. The exact price depends on the vehicle, the job and the location, and is quoted before work begins.',
      },
      {
        q: 'Does a locksmith charge extra for nights or weekends?',
        a: 'Many do. Ask for the total price on the phone, including any after-hours charge.',
      },
      {
        q: 'Is it cheaper to call roadside assistance?',
        a: 'It can be, if your plan covers lockouts. Check the wait time as well as the cost.',
      },
    ],
    related: [
      { href: '/price-estimator', label: 'Online price estimator' },
      { href: '/services/emergency-lockout', label: 'Emergency car lockout service in NYC' },
      { href: '/services/key-replacement', label: 'Car key replacement and fob programming' },
    ],
  },
  {
    slug: 'locked-keys-in-car-what-to-do',
    title: 'Locked Your Keys in Your Car? What to Do Right Now',
    metaTitle: 'Locked Keys in Your Car? What to Do Right Now (NYC)',
    metaDescription:
      'Step-by-step help if you locked your keys in your car in NYC: safety first, quick checks, what not to do, and who to call.',
    summary:
      'First make sure nobody is at risk. Then check the simple things, skip the coat hanger, and call roadside assistance or a mobile locksmith with your location and vehicle details.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Step 1: Check for safety',
        paragraphs: [
          'If a child, pet or person is inside the car, or the engine is running in an enclosed space, call 911 immediately. Everything below assumes nobody is at risk.',
        ],
      },
      {
        heading: 'Step 2: Try the quick checks',
        list: [
          'Try every door and the trunk. One may be unlocked.',
          'Check whether a spare key or fob is nearby or can be brought to you.',
          'Some car makers offer a phone app that can unlock the car remotely, if you set it up earlier.',
          'Look for a roadside plan through your insurer, a car-maker program, AAA or a credit card.',
        ],
        ordered: true,
      },
      {
        heading: 'Step 3: Do not force it',
        paragraphs: [
          'Wedges, wire hangers and bent tools can damage weather stripping, scratch paint and interfere with door wiring or airbag components. A repair usually costs more than a professional unlock.',
        ],
      },
      {
        heading: 'Step 4: Call for help',
        paragraphs: ['Have this ready, whether you call roadside assistance or a mobile locksmith:'],
        list: [
          'Your exact location: address or cross streets, and which side of the street.',
          'The year, make and model of the vehicle.',
          'Whether the key is a metal key, a transponder key or a push-to-start fob.',
          'A photo ID and your registration or insurance card showing your name.',
        ],
      },
      {
        heading: 'Step 5: Ask for the price and ETA first',
        paragraphs: [
          'Ask for the total price and an ETA before anyone is sent. If a technician arrives and the price has changed, ask why before work begins.',
        ],
      },
      {
        heading: 'Preventing the next lockout',
        paragraphs: [
          'Keep a spare key somewhere safe but not in the car. If you rely on a push-to-start fob, know where it is before you shut the door. Many fobs also have a hidden mechanical key; check your owner’s manual.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does it take to get into a locked car?',
        a: 'Once a technician is at the car, a standard door lockout is usually a matter of minutes. The wait for them to arrive is the variable part. Our [emergency lockout service](/services/emergency-lockout) gives you an ETA on the call.',
      },
      {
        q: 'Can a locksmith unlock a car without damage?',
        a: 'Usually yes. Professional non-destructive tools open most vehicles without scratching the paint or harming the lock.',
      },
      {
        q: 'What if my keys are locked in the trunk?',
        a: 'See our guide to [keys locked in the trunk](/guides/keys-locked-in-trunk). A technician can often open a door and use the interior trunk release.',
      },
    ],
    related: [
      { href: '/guides/keys-locked-in-trunk', label: 'Keys locked in the trunk' },
      { href: '/services/emergency-lockout', label: 'Emergency car lockout service in NYC' },
      { href: '/guides/will-police-unlock-my-car', label: 'Will the police or fire department unlock my car?' },
    ],
  },
  {
    slug: 'keys-locked-in-trunk',
    title: 'Keys Locked in the Trunk: How to Get Into Your Car',
    metaTitle: 'Keys Locked in the Trunk? How to Get Back In (NYC)',
    metaDescription:
      'Keys or fob locked in the trunk of your car in NYC? Why it happens, safe things to try first, and when to call a mobile locksmith.',
    summary:
      'A trunk lockout is usually solved by getting into the cabin and using the interior trunk release or folding the rear seat. If you cannot do that safely, a mobile locksmith can open the door first.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'Why it happens',
        paragraphs: [
          'Keys end up in the trunk when you load bags, close the lid, and the doors lock behind you, especially with a push-to-start fob or an automatic locking feature. The car is locked, the key is inside, and the trunk will not open.',
        ],
      },
      {
        heading: 'What to try first',
        list: [
          'Check each door and the trunk. One may not have locked.',
          'Look for a spare key or a phone app that can unlock your car, if you have one set up.',
          'If you can safely get a door open, use the interior trunk release or fold down the rear seats to reach the trunk.',
          'Check your roadside plan, since lockouts are sometimes included.',
        ],
        ordered: true,
      },
      {
        heading: 'What not to do',
        paragraphs: [
          'Do not pry the trunk lid or force the lock. Trunk lids and latches are easy to bend, and a repair can cost more than a lockout service.',
        ],
      },
      {
        heading: 'When to call a mobile locksmith',
        paragraphs: [
          'If you cannot get a door open, a technician can open the cabin without damage and then use the interior release to get the trunk open. Have your location, your vehicle’s year, make and model, and photo ID plus registration or insurance ready.',
        ],
      },
      {
        heading: 'If you also lost the key',
        paragraphs: [
          'If the key is not in the trunk and you cannot find it at all, you may need a new key made. See our guide to [losing your only car key](/guides/lost-car-key-no-spare) and [car key replacement](/services/key-replacement).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a locksmith open a locked trunk?',
        a: 'Often the approach is to open a door and use the interior trunk release. Tell the dispatcher your vehicle details so they can say what applies.',
      },
      {
        q: 'Does a trunk lockout cost more than a door lockout?',
        a: 'It can, depending on the vehicle and what is needed. Ask for the total price when you call.',
      },
    ],
    related: [
      { href: '/guides/locked-keys-in-car-what-to-do', label: 'Locked keys in your car: what to do right now' },
      { href: '/guides/lost-car-key-no-spare', label: 'Lost your only car key' },
      { href: '/services/emergency-lockout', label: 'Emergency car lockout service in NYC' },
    ],
  },
  {
    slug: 'lost-car-key-no-spare',
    title: 'Lost Your Only Car Key? Your Options in NYC',
    metaTitle: 'Lost Your Only Car Key? Options and Costs in NYC',
    metaDescription:
      'Lost your only car key or fob in NYC? Compare a mobile locksmith vs. the dealership, what you will need, and how to avoid the problem next time.',
    summary:
      'If you have no spare, you can have a key made without towing the car to the dealership. A mobile locksmith can often cut and program a transponder key or fob on-site, depending on the vehicle.',
    datePublished: D,
    dateModified: D,
    sections: [
      {
        heading: 'First, make sure it is really lost',
        list: [
          'Retrace your steps and check the last place you parked.',
          'Check jackets, bags and the car interior, including the trunk.',
          'Ask whoever else drove the car.',
          'If it may have been stolen, consider reporting it and let your insurer know.',
        ],
      },
      {
        heading: 'Option 1: Mobile locksmith',
        paragraphs: [
          'A [mobile automotive locksmith](/services/key-replacement) comes to your car, confirms ownership, and cuts and programs a replacement key or fob on-site for many vehicles. Whether it can be done on the spot depends on the make, model and year, so call with your details first.',
        ],
      },
      {
        heading: 'Option 2: Dealership',
        paragraphs: [
          'A dealership can supply keys for its brand, but the car usually has to be towed there, and you may wait for the key to be ordered. It can make sense for some vehicles, so compare the total cost and time.',
        ],
      },
      {
        heading: 'What you will need',
        list: [
          'A photo ID.',
          'Proof of ownership: registration or insurance card showing your name.',
          'The vehicle’s VIN, which is on the registration and visible through the windshield on the driver’s side.',
          'The year, make and model of the car.',
        ],
      },
      {
        heading: 'What it costs',
        paragraphs: [
          'Our key replacement starts from $120 and fob programming from $145. The exact price depends on the vehicle and the type of key and is quoted before work begins.',
        ],
      },
      {
        heading: 'Get a spare while you are at it',
        paragraphs: [
          'Making a spare is usually cheaper and easier than replacing the only key later. Ask for a spare when the new key is made. If the lock or ignition is what is failing, see [ignition repair](/services/ignition-repair).',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you make a car key without the original?',
        a: 'For many vehicles, yes. A key can be generated from the vehicle’s VIN or lock code, after ownership is confirmed. Call with your details to confirm.',
      },
      {
        q: 'Do I need to tow my car to get a new key?',
        a: 'Not necessarily. A mobile locksmith often can do it where the car is parked.',
      },
      {
        q: 'What if my car is a push-to-start model?',
        a: 'Smart fobs can often be programmed on-site, depending on the make, model and year.',
      },
    ],
    related: [
      { href: '/services/key-replacement', label: 'Car key replacement and fob programming' },
      { href: '/guides/how-much-does-it-cost-to-unlock-a-car-nyc', label: 'How much does it cost to unlock a car in NYC?' },
      { href: '/guides/keys-locked-in-trunk', label: 'Keys locked in the trunk' },
    ],
  },
];

export const guideBySlug = Object.fromEntries(guides.map(g => [g.slug, g]));
