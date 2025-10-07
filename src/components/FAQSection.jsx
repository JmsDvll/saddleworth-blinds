import React, { useState } from 'react'

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our blinds and shutters",
  faqs = [],
  className = ""
}) => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 relative">
            <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-6 rounded-full"></div>
            {description && (
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-brand-gold transition-transform duration-200 flex-shrink-0 ${
                      openItems[index] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openItems[index] && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-800 rounded-2xl p-8 border border-brand-gold/20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">
                Still Have Questions?
              </h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Our expert team is here to help with any questions about blinds, shutters, or window treatments for your Saddleworth home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-appointment"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Book Free Consultation
              </a>
              <a
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection