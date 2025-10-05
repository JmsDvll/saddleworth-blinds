import React from 'react'
import { Link } from 'react-router-dom'

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Uppermill",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely brilliant service from start to finish! The consultation was thorough, prices were competitive, and the fitting was perfect. Our new Vision blinds look amazing and work beautifully. Highly recommend!",
      product: "Vision Blinds"
    },
    {
      name: "David Thompson",
      location: "Diggle",
      rating: 5,
      date: "1 month ago",
      text: "We had shutters fitted throughout our cottage. The quality is exceptional and they've transformed our home. The fitters were professional, tidy, and really knew their stuff. Worth every penny!",
      product: "Plantation Shutters"
    },
    {
      name: "Emma Wilson",
      location: "Delph",
      rating: 5,
      date: "1 month ago",
      text: "Fantastic local company! They fitted Perfect Fit blinds to our conservatory - no drilling needed which was perfect for us. Great advice, fair prices, and the blinds look stunning. Will definitely use again.",
      product: "Perfect Fit Blinds"
    },
    {
      name: "James Harrison",
      location: "Greenfield",
      rating: 5,
      date: "2 months ago",
      text: "Had roller blinds fitted in our bedroom and they're perfect. The blackout fabric really works! From measuring to fitting took less than 2 weeks. Professional, friendly service throughout.",
      product: "Roller Blinds"
    },
    {
      name: "Lisa Chen",
      location: "Dobcross",
      rating: 5,
      date: "3 months ago",
      text: "We needed blinds for some awkward shaped windows and they came up with the perfect solution. The made-to-measure Venetian blinds fit perfectly and look so much better than anything we could have bought ready-made.",
      product: "Venetian Blinds"
    },
    {
      name: "Robert Edwards",
      location: "Lydgate",
      rating: 5,
      date: "3 months ago",
      text: "Excellent service and quality. They helped us choose the right blinds for each room and the results are fantastic. The fitters were punctual, tidy, and very professional. Highly recommended!",
      product: "Various Blinds"
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold">5.0 out of 5</span>
          </div>
          <p className="text-gray-300">
            Based on {reviews.length} reviews from happy customers across Saddleworth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{review.product}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Happy Customers
          </h3>
          <p className="text-gray-300 mb-6">
            Experience the difference of working with Saddleworth's trusted blind specialists
          </p>
          <Link
            to="/book-appointment"
            className="btn btn-primary text-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection