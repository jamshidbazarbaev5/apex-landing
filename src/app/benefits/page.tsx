'use client'
import Header from "../core/blocks/Header";
import Footer from "../core/blocks/Footer";
import BenefitsList from "../core/components/BenefitList";
import ContactForm from "../core/components/contact-form";

export default function Page(){
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4 sm:px-8" style={{ fontFamily: 'var(--font-kanit)' }}>
      <header className="mt-8 sm:mt-12 lg:mt-20 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
          What We Offer Owner-Operators
        </h1>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mt-8 lg:mt-20">
        {/* Left Column: Benefits List */}
        <section className="flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-lg">
            <BenefitsList />
          </div>
        </section>

        {/* Right Column: Contact Form */}
        <section className="flex justify-center lg:justify-start w-full">
          <ContactForm formType="operator" />
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
}

