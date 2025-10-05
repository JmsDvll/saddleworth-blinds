import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([])

  const faqs = [
    {
      question: "How much do window blinds cost in Saddleworth?",
      answer: "Our blinds start from around £30 per window for basic roller blinds, up to £300+ for premium shutters. The exact cost depends on your window size, the type of blind, and the fabric you choose. We always provide a free, no-obligation quote so you know exactly what to expect."
    },
    {
      question: "How long does it take to get blinds fitted?",
      answer: "Typically, it takes 2-3 weeks from measurement to fitting. We measure your windows during our free consultation, then your made-to-measure blinds are manufactured specifically for you. Once ready, we'll arrange a convenient fitting appointment - usually completed within an hour or two."
    },
    {
      question: "Do you fit blinds yourself or use contractors?",
      answer: "All our fittings are carried out by our own experienced team - never subcontractors. We've been fitting blinds in Saddleworth homes for over 20 years, so you can trust us to do the job properly and treat your home with respect."
    },
    {
      question: "What's the difference between ready-made and made-to-measure blinds?",
      answer: "Ready-made blinds come in standard sizes and often don't fit properly, leaving gaps that let in light. Our made-to-measure blinds are crafted specifically for your windows, ensuring a perfect fit, better light control, and a professional finish that adds value to your home."
    },
    {
      question: "Which blinds are best for privacy?",
      answer: "For maximum privacy, we recommend blackout roller blinds, Vision blinds (which have adjustable fabric strips), or shutters. Venetian blinds also offer excellent privacy control as you can angle the slats. We'll help you choose the best option for each room during your consultation."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes! All our blinds come with a comprehensive manufacturer's warranty (typically 1-5 years depending on the product). Our fitting is also guaranteed - if anything's not right, we'll come back and fix it free of charge. Your satisfaction is our priority."
    },
    {
      question: "Can you fit blinds to UPVC windows without drilling?",
      answer: "Absolutely! Our Perfect Fit blinds are designed specifically for UPVC windows and doors. They clip directly into the window frame - no drilling, no screws, no damage. They're perfect for conservatories and rental properties."
    },
    {
      question: "Do you remove old blinds?",
      answer: "Yes, we'll happily remove and dispose of your old blinds when we fit your new ones. Just let us know when booking and we'll take care of everything - there's no extra charge for this service."
    },
    {
      question: "What areas do you cover?",
      answer: "We cover all of Saddleworth and surrounding areas including Uppermill, Diggle, Delph, Greenfield, Dobcross, Lydgate, Denshaw, Friezland, and nearby parts of Oldham. If you're not sure if we cover your area, just give us a call!"
    },
    {
      question: "Can I see samples before ordering?",
      answer: "Of course! During your free home consultation, we bring a wide range of samples so you can see and feel the fabrics in your own home. This helps you see how they look in your lighting and match your décor perfectly."
    }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="py-16 bg-gray-800 rounded-lg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`px-6 transition-all duration-300 ${openItems.includes(index) ? 'py-4' : 'max-h-0 overflow-hidden'}`}
                  style={{ maxHeight: openItems.includes(index) ? '500px' : '0' }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01457597091"
                className="btn btn-primary"
              >
                Call 01457 597091
              </a>
              <Link
                to="/contact"
                className="btn btn-secondary"
              >
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection