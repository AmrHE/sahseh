'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = ({ className }) => {
	const { locales, asPath, locale } = useRouter();

	return (
		<div className={`${className} uppercase`}>
			{locales
				.filter((loc) => loc !== locale)
				.map((locale) => (
					<Link href={asPath} locale={locale} key={locale}>
						{locale.split('-')[0]}
					</Link>
				))}
		</div>
	);
};

export default LanguageSwitcher;
