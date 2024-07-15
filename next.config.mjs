/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: false,
    experimental: {
        serverMinification: false,
    },
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|jpeg|png|gif|webp|ico|css|js)', // Match all static files
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, max-age=0',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;


// images: {
//     remotePatterns: [
//         {
//             protocol: 'https',
//             hostname: 'dl.airtable.com',
//             pathname: '/.attachments/**',
//         },
//         {
//             protocol: 'https',
//             hostname: 'v5.airtableusercontent.com',
//             pathname: '/**',
//         },
//         {
//             protocol: 'https',
//             hostname: 'picsum.photos',
//             pathname: '/**',
//         },
//     ],
// },