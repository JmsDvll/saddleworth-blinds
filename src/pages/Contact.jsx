import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-12">
          Get in touch with Saddleworth's trusted window blind specialists. Call, email, or visit our Shaw showroom for expert advice and free quotes.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </h3>
                  <a href="tel:01457597091" className="text-brand-gold hover:text-brand-green transition-colors text-lg font-semibold">
                    01457 597091
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Mon-Fri: 9am-5pm | Saturday: 10am-4pm</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </h3>
                  <a href="mailto:sales@saddleworthblinds.co.uk" className="text-brand-gold hover:text-brand-green transition-colors">
                    sales@saddleworthblinds.co.uk
                  </a>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Visit Our Showroom
                  </h3>
                  <p className="text-gray-300">
                    6 Rochdale Road<br />
                    Shaw, Oldham<br />
                    OL2 8AD
                  </p>
                  <a 
                    href="https://maps.google.com/maps?q=6+Rochdale+Road,+Shaw,+Oldham+OL2+8AD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:text-brand-green transition-colors text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Areas We Cover</h2>
              <div className="grid grid-cols-2 gap-2">
                {['Uppermill', 'Diggle', 'Delph', 'Greenfield', 'Dobcross', 'Lydgate', 'Denshaw', 'Friezland', 'Grasscroft', 'Grotton', 'Springhead', 'Lees'].map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase()}`}
                    className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
