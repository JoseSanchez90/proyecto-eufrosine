'use client';

import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
  description: string;
}

export default function SocialShare({ title, url, description }: SocialShareProps) {
  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(`${title} - ${description}`);
  
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${shareUrl}`,
    instagram: `https://www.instagram.com/?url=${shareUrl}` // Instagram no tiene sharing directo
  };

  return (
    <div className="flex gap-4">
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Compartir en Facebook"
      >
        <Facebook size={20} />
      </a>
      
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
        aria-label="Compartir en Twitter"
      >
        <Twitter size={20} />
      </a>
      
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        aria-label="Compartir en WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}