const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
	reactStrictMode: false,
	swcMinify: true,
	i18n: {
		locales: ['ar-SA', 'en-US'],
		defaultLocale: 'ar-SA',
		localeDetection: false,
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
