// src/components/Seo.tsx
import React from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  contentUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ 
  title = "Mundo Digital - O mundo em um só lugar",
  description = "Explore o Mundo Digital conosco! Navegue na web3 e participe da revolução digital agora!",
  imageUrl = "https://i.postimg.cc/RFFjmJGF/Digital-World-App.png",
  contentUrl = "https://www.dworld.app/"
}) => {
  return (
    <>
      {/* Título da Página e Meta Tags Básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={contentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={contentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={contentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* LinkedIn e outros que usam OG */}
      <meta property="og:site_name" content="Mundo Digital" />
    </>
  );
};

export default Seo;
