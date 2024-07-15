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
                source: '/(.*)', // Match all static files
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    },
                    {
                        key: 'Pragma',
                        value: 'no-cache',
                    },
                    {
                        key: 'Expires',
                        value: '0',
                    },
                    {
                        key: 'Surrogate-Control',
                        value: 'no-store',
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