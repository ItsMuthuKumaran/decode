export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://thedecoder.in/#website",
        url: "https://thedecoder.in",
        name: "The Decoder",
        description: "Professional communication protocols for Indian freelancers and remote professionals working with global clients",
        publisher: {
          "@id": "https://thedecoder.in/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://thedecoder.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        inLanguage: "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://thedecoder.in/#organization",
        name: "The Decoder",
        url: "https://thedecoder.in",
        logo: {
          "@type": "ImageObject",
          url: "https://thedecoder.in/logo.png",
          width: 512,
          height: 512,
          caption: "The Decoder Logo"
        },
        image: {
          "@id": "https://thedecoder.in/logo.png"
        },
        sameAs: [
          "https://twitter.com/thedecoder_in",
          "https://linkedin.com/company/the-decoder",
          "https://instagram.com/thedecoder.in"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@thedecoder.in",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
          hoursAvailable: "Mo-Sa 09:00-18:00"
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN"
        }
      },
      {
        "@type": "Product",
        "@id": "https://thedecoder.in/#product",
        name: "The Decoder Complete",
        image: "https://thedecoder.in/product-image.jpg",
        description: "10 research-backed communication protocols preventing monthly losses for Indian professionals working with US/global clients. Includes copy-paste templates, decision trees, and AI-optimized frameworks.",
        brand: {
          "@id": "https://thedecoder.in/#organization"
        },
        sku: "DECODER-2026",
        offers: {
          "@type": "Offer",
          url: "https://thedecoder.in",
          price: "199",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 30,
            returnMethod: "https://schema.org/ReturnByEmail",
            returnFees: "https://schema.org/FreeReturn"
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "INR"
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "HUR"
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 0,
                unitCode: "HUR"
              }
            },
            doesNotShip: "true"
          }
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "523",
          bestRating: "5",
          worstRating: "1"
        },
        audience: {
          "@type": "Audience",
          audienceType: "Indian freelancers, remote professionals, consultants"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://thedecoder.in/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is this only for software developers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not at all. While developers love our protocols, they're designed for any Indian professional working with US/global clients: designers, writers, consultants, virtual assistants, customer support teams, and agency owners."
            }
          },
          {
            "@type": "Question",
            name: "Will this work for UK/Australian clients too?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, absolutely. The protocols work for all native English markets. We include specific variations for UK vs US preferences where relevant."
            }
          },
          {
            "@type": "Question",
            name: "What if it doesn't work for me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer a no-questions-asked 30-day money-back guarantee. If you don't see improvement in your client communication, simply email 'refund' to support@thedecoder.in and we'll process it within 48 hours."
            }
          }
        ]
      },
      {
        "@type": "Course",
        name: "The Decoder Communication Protocols",
        description: "Learn 10 research-backed communication protocols to prevent monthly losses and improve client retention",
        provider: {
          "@id": "https://thedecoder.in/#organization"
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          inLanguage: "en",
          duration: "P30D"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}