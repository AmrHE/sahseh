import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const { locale } = useRouter();

	useEffect(() => {
		if (locale === 'ar-SA') {
			document.documentElement.setAttribute('dir', 'rtl');
		} else {
			document.documentElement.setAttribute('dir', 'ltr');
		}
	}, [locale]);

	return <Component {...pageProps} />;
}

export default MyApp;
