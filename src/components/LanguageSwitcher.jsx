import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
	const { locales, asPath } = useRouter();
	return (
		<div>
			{locales.map((locale) => (
				<Link href={asPath} locale={locale} key={locale}>
					{locale}
				</Link>
			))}
		</div>
	);
};

export default LanguageSwitcher;
