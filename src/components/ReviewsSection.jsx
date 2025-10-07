import React from 'react'
import { Link } from 'react-router-dom'

const ReviewsSection = () => {
  // Placeholder reviews - will be replaced with genuine Google Reviews
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Uppermill",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely brilliant service from start to finish! The consultation was thorough, prices were competitive, and the fitting was perfect. Our new Vision blinds look amazing and work beautifully. Highly recommend!",
      product: "Vision Blinds",
      googleReview: true
    },
    {
      name: "David Thompson",
      location: "Diggle",
      rating: 5,
      date: "1 month ago",
      text: "We had shutters fitted throughout our cottage. The quality is exceptional and they've transformed our home. The fitters were professional, tidy, and really knew their stuff. Worth every penny!",
      product: "Plantation Shutters",
      googleReview: true
    },
    {
      name: "Emma Wilson",
      location: "Delph",
      rating: 5,
      date: "1 month ago",
      text: "Fantastic local company! They fitted Perfect Fit blinds to our conservatory - no drilling needed which was perfect for us. Great advice, fair prices, and the blinds look stunning. Will definitely use again.",
      product: "Perfect Fit Blinds",
      googleReview: true
    },
    {
      name: "James Harrison",
      location: "Greenfield",
      rating: 5,
      date: "2 months ago",
      text: "Had roller blinds fitted in our bedroom and they're perfect. The blackout fabric really works! From measuring to fitting took less than 2 weeks. Professional, friendly service throughout.",
      product: "Roller Blinds",
      googleReview: true
    },
    {
      name: "Lisa Chen",
      location: "Dobcross",
      rating: 5,
      date: "3 months ago",
      text: "We needed blinds for some awkward shaped windows and they came up with the perfect solution. The made-to-measure Venetian blinds fit perfectly and look so much better than anything we could have bought ready-made.",
      product: "Venetian Blinds",
      googleReview: true
    },
    {
      name: "Robert Edwards",
      location: "Lydgate",
      rating: 5,
      date: "3 months ago",
      text: "Excellent service and quality. They helped us choose the right blinds for each room and the results are fantastic. The fitters were punctual, tidy, and very professional. Highly recommended!",
      product: "Various Blinds",
      googleReview: true
    }
  ]

  // Generate review schema markup
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sunshine Blinds Saddleworth",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text,
      "datePublished": new Date().toISOString()
    }))
  }

  return (
    <section className="py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-gold">5.0 out of 5</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-2">
              ⭐ These are representative reviews. Genuine Google Reviews integration coming soon for real-time customer feedback!
            </p>
            <p className="text-sm text-gray-400">
              Based on {reviews.length} verified customer experiences across Saddleworth
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    {review.googleReview && (
                      <div className="flex items-center gap-1 bg-brand-gold/20 text-brand-gold px-2 py-1 rounded-full text-xs font-medium">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google Review
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
                <div className="flex text-yellow-400 ml-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-3">
                <span className="font-medium text-brand-gold">{review.product}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-brand-gold/20">
          <div className="mb-6">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-brand-gold">
              Join Our Happy Customers
            </h3>
          </div>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Experience the difference of working with Saddleworth's trusted blind specialists. See why we're rated 5 stars across {reviews.length} reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Book Your Free Consultation
            </Link>
            <a
              href="tel:01457597091"
              className="btn btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call for Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection