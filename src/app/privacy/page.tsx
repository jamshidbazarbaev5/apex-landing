'use client'
import React, { useState, useEffect } from 'react';

// --- Data Constants ---
const DATA = {
  lastUpdated: "12.01.2025",
  companyName: "Axper, LLC",
  email: "recruit@axpergroup.com",
  phone: "(940) 644-4077",
  dotNumber: "4169562"
};

// --- Internal Helper Components ---

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-center text-3xl font-bold mt-4 mb-2 text-[#354761]">
    {children}
  </h1>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold mt-6 mb-2 text-[#354761] border-b border-[#354761]/10 pb-1">
    {children}
  </h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold mt-4 mb-2 text-[#354761]">
    {children}
  </h3>
);

const Paragraph = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[13px] leading-relaxed text-justify mb-3 text-[#354761] ${className}`}>
    {children}
  </p>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-[18px] mb-3 text-[13px] leading-relaxed text-[#354761] space-y-1">
    {children}
  </ul>
);

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-[#354761] hover:text-blue-600 underline decoration-1 underline-offset-2 transition-colors duration-200"
  >
    {children}
  </a>
);

// --- Cookie Banner Component ---

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage safely to ensure it works in SSR environments
    try {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) {
        setIsVisible(true);
      }
    } catch (e) {
      // Ignore errors if localStorage is not available
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookiesAccepted', 'true');
      setIsVisible(false);
    } catch (e) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#354761] text-white p-4 shadow-lg z-50 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-[820px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <p className="text-sm">
          This site uses cookies to enhance your experience.
        </p>
        <button
          onClick={handleAccept}
          className="bg-white text-[#354761] px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

// --- Main Privacy Policy Component ---

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-10 px-5 bg-[#efefef] font-sans">
      <main className="max-w-[820px] mx-auto bg-white/50 p-8 md:p-12 rounded-xl shadow-sm border border-white/60 backdrop-blur-sm sm:bg-transparent sm:shadow-none sm:border-none sm:backdrop-blur-none sm:p-0">
        
        <header className="mb-8">
          <PageTitle>Privacy Policy & SMS Terms</PageTitle>
          <div className="text-center text-[13px] text-[#354761]/60">
            Last Updated: {DATA.lastUpdated} · {DATA.companyName}
          </div>
        </header>

        <section id="privacy-policy" className="mb-10">
          <SectionHeading>1. Privacy Policy</SectionHeading>
          <Paragraph>
            At {DATA.companyName}, we highly value your privacy and are fully committed to protecting your personal information. This Privacy Policy provides comprehensive details on the types of information we collect, how it is used, stored, and protected, as well as the rights you have over your data.
          </Paragraph>

          <SubHeading>Information We Collect</SubHeading>
          <List>
            <li>Full name, email, and phone number</li>
            <li>Uploaded documents such as contracts, agreements, or supporting files</li>
            <li>Details regarding your inquiry or service request</li>
            <li>Optional information provided in messages, notes, or forms</li>
            <li>Technical information such as IP address, browser type, and device details for site performance monitoring</li>
          </List>

          <SubHeading>How We Collect Information</SubHeading>
          <Paragraph>
            Data is collected primarily via our website forms, document uploads, and email communications. Certain technical information may be collected automatically through standard web technologies such as cookies and server logs, strictly for internal use and performance monitoring.
          </Paragraph>

          <SubHeading>Purpose of Collection</SubHeading>
          <List>
            <li>Respond to inquiries efficiently and accurately</li>
            <li>Process contracts and related submissions securely</li>
            <li>Send SMS messages only with your explicit consent</li>
            <li>Maintain records for auditing and legal compliance</li>
            <li>Improve website usability, service quality, and user experience</li>
          </List>

          <SubHeading>Data Sharing and Disclosure</SubHeading>
          <Paragraph>
            We will never sell or share your personal information with third parties or affiliates for marketing purposes. Data may only be shared internally with authorized personnel who require access for processing inquiries, contracts, or SMS communications. All internal access is monitored and strictly controlled.
          </Paragraph>

          <SubHeading>Data Retention</SubHeading>
          <Paragraph>
            Personal data is retained only for as long as necessary to meet the purposes described in this Privacy Policy or to comply with legal obligations. Once no longer required, data is securely deleted or anonymized.
          </Paragraph>

          <SubHeading>Data Security Measures</SubHeading>
          <Paragraph>
            {DATA.companyName} applies robust technical and organizational measures to ensure your personal data is secure. Measures include encryption, secure servers, access control, and regular security reviews.
          </Paragraph>

          <SubHeading>Your Rights</SubHeading>
          <Paragraph>
            You have the right to access, correct, or request deletion of your personal data. You can also request restrictions on processing or object to certain uses. To exercise your rights, contact us at <Link href={`mailto:${DATA.email}`}>{DATA.email}</Link>. We will respond promptly and provide guidance for any data-related requests.
          </Paragraph>

          <SubHeading>Children’s Privacy (COPPA)</SubHeading>
          <Paragraph>
            Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </Paragraph>

          <SubHeading>Cookies & Tracking Technologies</SubHeading>
          <Paragraph>
            Our website uses cookies, web beacons, and similar technologies to enhance user experience, analyze website traffic, and for security purposes. You may disable cookies in your browser settings, but some features of our services may not function properly if cookies are blocked.
          </Paragraph>

          <SubHeading>Data Processing Location / International Transfer</SubHeading>
          <Paragraph>
            Personal data may be processed in the United States and other countries where our authorized personnel, including those in Uzbekistan, are located. By using our services, you consent to such cross-border data transfers.
          </Paragraph>

          <SubHeading>Third-Party Links and Services</SubHeading>
          <Paragraph>
            Our website may contain links to external websites or services. We are not responsible for the privacy practices or content of third-party sites. We recommend reviewing their privacy policies before providing any personal information.
          </Paragraph>

          <SubHeading>Changes to Policy</SubHeading>
          <Paragraph>
            {DATA.companyName} may update this Privacy Policy & SMS Terms periodically to reflect changes in company practices, legal requirements, or technological updates. We encourage all users to review this page regularly to stay informed about how personal data and SMS communications are handled.
          </Paragraph>
        </section>

        <section id="sms-terms" className="mb-10">
          <SectionHeading>2. SMS Terms & Conditions</SectionHeading>
          <Paragraph>
            {DATA.companyName} only sends SMS messages to users who provide explicit consent. These messages are intended solely for communication regarding inquiries, contracts, or service-related updates. SMS is not used for marketing or promotional purposes without explicit opt-in consent.
          </Paragraph>

          <SubHeading>Consent to Receive SMS</SubHeading>
          <Paragraph>
            By providing your phone number and checking the consent box in our forms, you agree to receive messages from {DATA.companyName}. Messages are sent strictly for responding to your inquiries, updates on contracts, scheduling, or follow-up communications.
          </Paragraph>

          <SubHeading>Types of SMS Messages</SubHeading>
          <List>
            <li>Replies to questions or inquiries submitted through our website</li>
            <li>Confirmation of received contracts or uploaded documents</li>
            <li>Notifications regarding appointment scheduling or service updates</li>
            <li>Follow-up messages to ensure successful service delivery or issue resolution</li>
          </List>

          <SubHeading>Message Frequency</SubHeading>
          <Paragraph>
            SMS messages are sent only as necessary. You will not receive unsolicited or mass SMS messages. Frequency may vary based on your engagement with {DATA.companyName} services.
          </Paragraph>

          <SubHeading>Message & Data Rates</SubHeading>
          <Paragraph>
            Standard messaging and data rates may apply depending on your mobile carrier. Rates may differ for domestic versus international messages. Please check with your carrier for specific rates.
          </Paragraph>

          <SubHeading>Opt-Out and Help</SubHeading>
          <Paragraph>
            You can stop receiving SMS messages at any time by replying STOP. For assistance or more information, reply HELP or contact us at <Link href={`mailto:${DATA.email}`}>{DATA.email}</Link>.
          </Paragraph>

          <SubHeading>User Responsibilities</SubHeading>
          <Paragraph>
            Users are responsible for providing accurate phone numbers. Please update us if your number changes or if you no longer wish to receive SMS messages. Misuse or incorrect information may prevent us from responding effectively.
          </Paragraph>

          <SubHeading>SMS Security</SubHeading>
          <Paragraph>
            All SMS communications are protected and handled in accordance with our security protocols. We take measures to ensure messages are only sent to users who have consented and that content remains private and secure.
          </Paragraph>
        </section>

        <section id="contact" className="mb-12">
          <SectionHeading>3. Contact Information</SectionHeading>
          <Paragraph>
            If you have any questions, concerns, or requests regarding this Privacy Policy & SMS Terms, please contact us:
          </Paragraph>
          <List>
            <li>Email: <Link href={`mailto:${DATA.email}`}>{DATA.email}</Link></li>
            <li>Phone: <Link href={`tel:${DATA.phone.replace(/\D/g,'')}`}>{DATA.phone}</Link></li>
          </List>
        </section>

        <footer className="text-start text-xs text-[#354761]/70 mt-16 border-t border-[#354761]/10 pt-8">
          <p className="mb-2">
            By using our website and providing personal information, you acknowledge that you have read, understood, and agreed to this Privacy Policy & SMS Terms.
          </p>
          <p className="font-semibold">
            {DATA.companyName} · U.S. DOT: {DATA.dotNumber}
          </p>
        </footer>
      </main>

      <CookieBanner />
    </div>
  );
}
