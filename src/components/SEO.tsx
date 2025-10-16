import React from 'react';
import { Helmet } from 'react-helmet-async';
import logoAsset from './logo.png';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Integer.io Services - Professional Web & AI Solutions in Tamil Nadu",
  description = "Expert web development, AI/ML projects, logo design, and digital marketing services for businesses and students across Tamil Nadu. Affordable, professional, and innovative solutions.",
  keywords = "web development, AI projects, machine learning, logo design, digital marketing, Tamil Nadu, student projects, business solutions",
  image = logoAsset,
  url = "https://integer-io-services.com"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MS Kawin" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Integer.io Services" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#10b981" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Integer.io Services",
          "description": description,
          "url": url,
          "logo": image,
          "founder": {
            "@type": "Person",
            "name": "MS Kawin"
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8015355914",
            "contactType": "customer service",
            "email": "mskawin2004@gmail.com"
          },
          "sameAs": [
            "https://wa.me/918015355914"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;