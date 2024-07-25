/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en-US', 'ar-SA'],
		defaultLocale: 'en-US',
	},

	images: {
		remotePatterns: [
			{
				// protocol: 'http',
				hostname: 'images.ctfassets.net',
				port: '',
				// pathname: '/img/**',
			},
		],
	},
	// images: { domains: [''] },
};

module.exports = nextConfig;
