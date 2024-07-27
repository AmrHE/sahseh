const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['en-US', 'ar-SA'],
		defaultLocale: 'en-US',
	},

	images: {
		remotePatterns: [
			{
				hostname: 'images.ctfassets.net',
				port: '',
			},
		],
	},
};

module.exports = withNextVideo(nextConfig);
