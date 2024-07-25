const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				cairo: ['Cairo'],
				arabswell: ['var(--font-arabswell)'],
			},
			colors: {
				'blue-light': '#5B61D3',
				'blue-primary': '#292C63',
				'orange-light': '#FFB192',
				'orange-primary': '#E2693A',
				'yellow-primary': '#FFE176',
				'yellow-dark': '#FF8A00',
				'green-lightest': '#DDFFF0',
				'green-secondary': '#CBEA7B',
				'green-lighter': '#27B274',
				'green-light': '#0D8C5D',
				'green-primary': '#085654',
				'green-dark': '#083722',
				'green-darker': '#102D0A',
			},
			backgroundImage: {
				'hero-gradient':
					'linear-gradient(180deg, rgba(149,196,194,1) 0%, rgba(255,255,255,1) 100%)',
				'care-gradient':
					'linear-gradient(180deg, #94C2C0 20%, rgba(255,255,255,1) 100%)',
				'about-gradient':
					'linear-gradient(90deg, rgba(255,225,118,1) 0%, rgba(255,242,196,1) 100%)',
				'care_partners-gradient':
					'linear-gradient(270deg, #DDF7FF 0%, rgba(245,245,245,0.63) 100%)',
				'care_partners-gradient2':
					'linear-gradient(90deg, #D8D8D8 0%, #F3F3F3 100%)',
				'nutrition_partners-gradient':
					'linear-gradient(90deg, #f5f5f5 0%, #C4E8C5 63%)',
				'register-gradient': 'linear-gradient(180deg, #95C4C2 0%, #ffffff 31%)',
			},
		},
	},
	plugins: [],
};
