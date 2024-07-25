import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';
import Layout from '../src/components/layout/Layout';
import { ContentContextProvider } from '../src/context/ContentContext';

import localFont from 'next/font/local';

const arabswell = localFont({
	src: '../public/arfonts-arabswell-1.ttf',
	variable: '--font-arabswell',
});

function MyApp({ Component, pageProps }) {
	const { locale } = useRouter();

	useEffect(() => {
		if (locale === 'ar-SA') {
			document.documentElement.setAttribute('dir', 'rtl');
		} else {
			document.documentElement.setAttribute('dir', 'ltr');
		}
	}, [locale]);

	return (
		<ContentContextProvider>
			<main className={`${arabswell.variable}`}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</ContentContextProvider>
	);
}

export default MyApp;
