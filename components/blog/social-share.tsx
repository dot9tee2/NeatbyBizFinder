'use client';

import { Twitter, Facebook, Linkedin, Link2, Check, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SocialShareProps {
    url: string;
    title: string;
    description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
    const [copied, setCopied] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description || '');

    const shareLinks = [
        {
            name: 'Twitter',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: 'hover:bg-sky-500 hover:text-white hover:border-sky-500',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
            color: 'hover:bg-blue-700 hover:text-white hover:border-blue-700',
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            color: 'hover:bg-green-500 hover:text-white hover:border-green-500',
        },
        {
            name: 'Email',
            icon: Mail,
            href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
            color: 'hover:bg-gray-700 hover:text-white hover:border-gray-700',
        },
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 mr-2">Share:</span>
            {shareLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target={link.name === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={`Share on ${link.name}`}
                >
                    <Button
                        variant="outline"
                        size="icon"
                        className={`rounded-full h-9 w-9 transition-colors ${link.color}`}
                    >
                        <link.icon className="h-4 w-4" />
                    </Button>
                </a>
            ))}
            <Button
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-gray-100"
                onClick={copyToClipboard}
                aria-label="Copy link"
            >
                {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                ) : (
                    <Link2 className="h-4 w-4" />
                )}
            </Button>
        </div>
    );
}
