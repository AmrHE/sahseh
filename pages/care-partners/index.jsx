import React, { useEffect } from 'react';
import Image from 'next/image';

import { client } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';
import HeroSection from '../../src/components/care/HeroSection';
import IdeaSection from '../../src/components/care/IdeaSection';
import GoalsSection from '../../src/components/care/GoalsSection';
import Partners from '../../src/components/care/Partners';
import Head from 'next/head';
const CarePartners = ({ sahsehCareData }) => {
	const { setNavbar, mediaFiles, setMediaFiles, setFooter } =
		useContentContext();

	useEffect(() => {
		setFooter(sahsehCareData.footer);
		setNavbar(sahsehCareData.navbar);
		setMediaFiles({
			...mediaFiles,
			logo: sahsehCareData.logo,
			whiteLogo: sahsehCareData.whiteLogo,
		});
	}, [sahsehCareData]);

	return (
		<>
			<Head>
				<title>{sahsehCareData?.sahsehCareContent.seoTitle}</title>
				<meta
					name="description"
					content={sahsehCareData?.sahsehCareContent.seoDescription}
				/>
				<meta
					name="keywords"
					content={
						sahsehCareData?.sahsehCareContent.seoKeywords &&
						sahsehCareData?.sahsehCareContent.seoKeywords
					}
				/>
			</Head>

			<div className="mb-12 -mt-12 lg:-mt-24 lg:mb-24">
				<Partners
					sahsehCareContent={sahsehCareData.sahsehCareContent}
					mediaFiles={mediaFiles}
				/>
			</div>
		</>
	);
};

export default CarePartners;

export async function getStaticProps({ locale }) {
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const sahsehCareContent = await client.getEntry('NeVSDOOvG5rZTk3QXvlVZ', {
		locale,
	});
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz', {
		locale,
	});
	const whiteLogo = await client.getAsset('1hk88EcrYjfrohZJuLEie2', {
		locale,
	});

	return {
		props: {
			sahsehCareData: {
				sahsehCareContent: sahsehCareContent.fields,
				navbar: navbar.fields,
				whiteLogo: whiteLogo.fields.file,
				footer: footer.fields,
				logo: logo.fields.file,
			},
		},
	};
}
