import React from 'react'

const Contact = () => {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          Get in touch with Saddleworth's trusted window blind specialists. Call, email, or visit our Shaw showroom for expert advice and free quotes.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
                <a href="tel:01457597091" className="text-brand-gold hover:text-brand-green transition-colors text-lg">
                  01457 597091
                </a>
                <p className="text-gray-400 text-sm">Mon-Fri: 9am-5pm | Saturday: 10am-4pm</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                <a href="mailto:sales@saddleworthblinds.co.uk" className="text-brand-gold hover:text-brand-green transition-colors">
                  sales@saddleworthblinds.co.uk
                </a>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2">Visit Our Showroom</h3>
                <p className="text-gray-300">6 Rochdale Road<br />Shaw, Oldham<br />OL2 8AD</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Areas We Cover</h2>
            <ul className="grid grid-cols-2 gap-2">
              {['Uppermill', 'Diggle', 'Delph', 'Greenfield', 'Dobcross', 'Lydgate'].map((area) => (
                <li key={area} className="text-gray-300">• {area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
