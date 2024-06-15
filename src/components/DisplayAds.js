'use client'

import { useEffect } from 'react';

export default function DisplayAds() {
    useEffect(() => {
        const pushAd = () => {
            try {
                const adsbygoogle = window.adsbygoogle || [];
                adsbygoogle.push({});
            } catch (error) {
                console.error(error);
            }
        }

        let interval = setInterval(() => {
            if (window.adsbygoogle) {
                clearInterval(interval);
                pushAd();
            }
        }, 300)

        return () => clearInterval(interval);
    }, []);

    return (
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7847773430575106"
            data-ad-slot="6652746422"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
};