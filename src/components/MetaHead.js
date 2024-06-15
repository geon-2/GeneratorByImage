import Head from 'next/head';

export default function MetaHead() {
    return (
        <Head>
            <title>Auto Meme Generator</title>
            <meta name="description" content="Create your own memes with this simple meme generator." />
            <meta name="google-adsense-account" content="ca-pub-7847773430575106" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Auto Meme Generator" />
            <meta property="og:description" content="Create your own memes with this simple meme generator." />
            <meta property="og:image" content="https://auto-meme-generator.vercel.app/og-image.png" />
            <meta property="og:url" content="https://www.memegenerator.kr/" />
            <meta property="og:type" content="website" />
        </Head>
    );
}