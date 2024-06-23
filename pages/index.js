import Head from 'next/head';
import Image from 'next/image';
import client from '../src/libs/contentful';
import LanguageSwitcher from '../src/components/LanguageSwitcher';

export default function Home({ homePageData }) {
	console.log({ homePageData });
	return (
		<div className="ltr:text-red-500 rtl:text-blue-500">
			<LanguageSwitcher />
		</div>
	);
}

export async function getStaticProps() {
	const res = await client.withAllLocales.getEntry(
		process.env.CONTENTFUL_HOME_PAGE_ENTRY_ID
	);

	console.log({ res });
	return {
		props: {
			homePageData: res.fields,
		},
	};
}
