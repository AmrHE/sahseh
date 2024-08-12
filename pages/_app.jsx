import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';
import Layout from '../src/components/layout/Layout';
import { ContentContextProvider } from '../src/context/ContentContext';
import Head from 'next/head';

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
		<>
			<Head>
				<link rel="icon" href="/logo.webp" />
			</Head>
			<ContentContextProvider>
				<main>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</main>
			</ContentContextProvider>
		</>
	);
}

export default MyApp;
