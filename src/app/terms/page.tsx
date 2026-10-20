import { Metadata } from 'next';
import ContextNote from '@/components/ContextNote';
import { Scale, FileText, AlertCircle, HelpCircle, Lock, User, Users, Globe, ShieldCheck, Link2, MessageSquare, Copyright, Gavel, BookOpen, FileX, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | QuickCarUnlock NYC',
  description: 'Terms and conditions governing the use of Quick Car Unlock NYC website and auto locksmith services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      {/* Header */}
      <section className="container max-w-4xl text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 rounded-full mb-6 text-[var(--action-orange)] border border-orange-500/20">
          <Scale size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-xl text-[var(--text-secondary)]">Agreement Between User and Quick Car Unlock NYC</p>
      </section>

      {/* Content */}
      <section className="container max-w-4xl">
        <div className="card p-8 md:p-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl rounded-3xl text-[var(--slate-light)] leading-relaxed space-y-10">
          
          <div>
            <p className="text-lg">
              Welcome to quickcarunlock.com. The quickcarunlock.com website (the "Site") is comprised of various web pages operated by Quick Car Unlock NYC. quickcarunlock.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of quickcarunlock.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.
            </p>
            <p className="text-lg mt-4">
              quickcarunlock.com is an E-commerce Site.
            </p>
            <p className="text-lg mt-4">
              Quick Car Unlock NYC provides emergency automotive locksmith services, including car unlocking, key replacement, and ignition repair, primarily within the five boroughs of New York City.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Lock className="text-[#3B82F6]" /> 1. Privacy
            </h2>
            <p>
              Your use of quickcarunlock.com is subject to Quick Car Unlock NYC's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <FileText className="text-[var(--safety-green)]" /> 2. Electronic Communications
            </h2>
            <p>
              Visiting quickcarunlock.com or sending emails to Quick Car Unlock NYC constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <User className="text-[var(--action-orange)]" /> 3. Your Account
            </h2>
            <p>
              If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Quick Car Unlock NYC is not responsible for third party access to your account that results from theft or misappropriation of your account. Quick Car Unlock NYC and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Users className="text-purple-500" /> 4. Children Under Thirteen
            </h2>
            <p>
              Quick Car Unlock NYC does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use quickcarunlock.com only with permission of a parent or guardian.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <FileX className="text-red-500" /> 5. Cancellation/Refund Policy
            </h2>
            <p>
              Our services are typically rendered on-site and payment is collected upon completion of the service. Due to the emergency nature of our services, cancellations are generally handled on a case-by-case basis. If you need to cancel a dispatched service, please contact us immediately at (347) 801-7119. Depending on the technician's proximity and work already performed, a service fee may apply. Refunds for services rendered are at the sole discretion of Quick Car Unlock NYC.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Link2 className="text-[#3B82F6]" /> 6. Links to Third Party Sites/Third Party Services
            </h2>
            <p>
              quickcarunlock.com may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Quick Car Unlock NYC and Quick Car Unlock NYC is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Quick Car Unlock NYC is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Quick Car Unlock NYC of the site or any association with its operators.
            </p>
            <p className="mt-4">
              Certain services made available via quickcarunlock.com are delivered by third party sites and organizations. By using any product, service or functionality originating from the quickcarunlock.com domain, you hereby acknowledge and consent that Quick Car Unlock NYC may share such information and data with any third party with whom Quick Car Unlock NYC has a contractual relationship to provide the requested product, service or functionality on behalf of quickcarunlock.com users and customers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Copyright className="text-[var(--safety-green)]" /> 7. No Unlawful or Prohibited Use/Intellectual Property
            </h2>
            <p>
              You are granted a non-exclusive, non-transferable, revocable license to access and use quickcarunlock.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Quick Car Unlock NYC that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.
            </p>
            <p className="mt-4">
              All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Quick Car Unlock NYC or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
            </p>
            <p className="mt-4">
              You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Quick Car Unlock NYC content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Quick Car Unlock NYC and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Quick Car Unlock NYC or our licensors except as expressly authorized by these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <MessageSquare className="text-[var(--action-orange)]" /> 8. Use of Communication Services
            </h2>
            <p>
              The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.
            </p>
            <p className="mt-4">
              By way of example, and not as a limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents; upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages; conduct or forward surveys, contests, pyramid schemes or chain letters; download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner; falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded; restrict or inhibit any other user from using and enjoying the Communication Services; violate any code of conduct or other guidelines which may be applicable for any particular Communication Service; harvest or otherwise collect information about others, including e-mail addresses, without their consent; violate any applicable laws or regulations.
            </p>
            <p className="mt-4">
              Quick Car Unlock NYC has no obligation to monitor the Communication Services. However, Quick Car Unlock NYC reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. Quick Car Unlock NYC reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever.
            </p>
            <p className="mt-4">
              Quick Car Unlock NYC reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Quick Car Unlock NYC's sole discretion.
            </p>
            <p className="mt-4">
              Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service. Quick Car Unlock NYC does not control or endorse the content, messages or information found in any Communication Service and, therefore, Quick Car Unlock NYC specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Service. Managers and hosts are not authorized Quick Car Unlock NYC spokespersons, and their views do not necessarily reflect those of Quick Car Unlock NYC.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <FileText className="text-[#3B82F6]" /> 9. Materials Provided to quickcarunlock.com or Posted on Any Quick Car Unlock NYC Web Page
            </h2>
            <p>
              Quick Car Unlock NYC does not claim ownership of the materials you provide to quickcarunlock.com (including feedback and suggestions) or post, upload, input or submit to any Quick Car Unlock NYC Site or our associated services (collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting your Submission you are granting Quick Car Unlock NYC, our affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.
            </p>
            <p className="mt-4">
              No compensation will be paid with respect to the use of your Submission, as provided herein. Quick Car Unlock NYC is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in Quick Car Unlock NYC's sole discretion.
            </p>
            <p className="mt-4">
              By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Globe className="text-[var(--safety-green)]" /> 10. International Users
            </h2>
            <p>
              The Service is controlled, operated and administered by Quick Car Unlock NYC from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Quick Car Unlock NYC Content accessed through quickcarunlock.com in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <ShieldCheck className="text-[var(--action-orange)]" /> 11. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend and hold harmless Quick Car Unlock NYC, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Quick Car Unlock NYC reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Quick Car Unlock NYC in asserting any available defenses.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Gavel className="text-red-500" /> 12. Arbitration
            </h2>
            <p>
              In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regard to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision, shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <Users className="text-purple-500" /> 13. Class Action Waiver
            </h2>
            <p>
              Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Quick Car Unlock NYC agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <AlertCircle className="text-red-500" /> 14. Liability Disclaimer
            </h2>
            <p className="uppercase text-sm tracking-wider text-[var(--text-secondary)] bg-white/5 p-6 rounded-xl border border-white/10 mb-4 leading-relaxed">
              THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. QUICK CAR UNLOCK NYC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
            </p>
            <p className="uppercase text-sm tracking-wider text-[var(--text-secondary)] bg-white/5 p-6 rounded-xl border border-white/10 mb-4 leading-relaxed">
              QUICK CAR UNLOCK NYC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. QUICK CAR UNLOCK NYC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
            </p>
            <p className="uppercase text-sm tracking-wider text-[var(--text-secondary)] bg-white/5 p-6 rounded-xl border border-white/10 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL QUICK CAR UNLOCK NYC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF QUICK CAR UNLOCK NYC OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <BookOpen className="text-[#3B82F6]" /> 15. Termination/Access Restriction
            </h2>
            <p>
              Quick Car Unlock NYC reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of New York and you hereby consent to the exclusive jurisdiction and venue of courts in New York in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
            </p>
            <p className="mt-4">
              You agree that no joint venture, partnership, employment, or agency relationship exists between you and Quick Car Unlock NYC as a result of this agreement or use of the Site. Quick Car Unlock NYC's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Quick Car Unlock NYC's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Quick Car Unlock NYC with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
            </p>
            <p className="mt-4">
              Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Quick Car Unlock NYC with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Quick Car Unlock NYC with respect to the Site.
            </p>
            <p className="mt-4">
              A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <RefreshCw className="text-[var(--safety-green)]" /> 16. Changes to Terms
            </h2>
            <p>
              Quick Car Unlock NYC reserves the right, in its sole discretion, to change the Terms under which quickcarunlock.com is offered. The most current version of the Terms will supersede all previous versions. Quick Car Unlock NYC encourages you to periodically review the Terms to stay informed of our updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <HelpCircle className="text-[var(--safety-green)]" /> 17. Contact Us
            </h2>
            <p>Quick Car Unlock NYC welcomes your questions or comments regarding the Terms:</p>
            <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10 inline-block space-y-2">
              <p>Quick Car Unlock NYC</p>
              <p>Email: <strong>info@quickcarunlock.com</strong></p>
              <p>Phone: <strong>(347) 801-7119</strong></p>
            </div>
            <p className="mt-6 text-sm text-[var(--slate-light)] opacity-80">
              Effective as of August 1, 2026
            </p>
          </div>

        </div>
      </section>

      <ContextNote paragraphs={["Questions about these terms? [Contact us](/contact). See also our [Privacy Policy](/privacy), or learn about our [services](/services)."]} />
    </div>
  );
}