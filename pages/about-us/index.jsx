import React, { useEffect } from 'react';
import { client } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';
import HeroSection from '../../src/components/about/HeroSection';
import AboutBox from '../../src/components/about/AboutBox';
import NurtritionSection from '../../src/components/about/NurtritionSection';
import CareSection from '../../src/components/about/CareSection';
import CouponSection from '../../src/components/about/CouponSection';
import bg from '../../public/about-bottom-bg.webp';
import Image from 'next/image';
import Head from 'next/head';

const AboutUs = ({ aboutPageData }) => {
	const { setNavbar, mediaFiles, setMediaFiles, setFooter } =
		useContentContext();

	useEffect(() => {
		setFooter(aboutPageData.footer);
		setNavbar(aboutPageData.navbar);
		// setAboutContent(aboutPageData?.aboutPageContent);
		setMediaFiles({
			...mediaFiles,
			logo: aboutPageData.logo,
			whiteLogo: aboutPageData.whiteLogo,
		});
	}, [aboutPageData]);

	return (
		<>
			<Head>
				<title>{aboutPageData?.aboutPageContent.seoTitle}</title>
				<meta
					name="description"
					content={aboutPageData?.aboutPageContent.seoDescription}
				/>
				<meta
					name="keywords"
					content={
						aboutPageData?.aboutPageContent.seoKeywords &&
						aboutPageData?.aboutPageContent.seoKeywords
					}
				/>
			</Head>

			<HeroSection />
			<AboutBox
				aboutContent={aboutPageData?.aboutPageContent}
				mediaFiles={mediaFiles}
			/>
			<NurtritionSection
				aboutContent={aboutPageData?.aboutPageContent}
				mediaFiles={mediaFiles}
			/>
			<CareSection
				aboutContent={aboutPageData?.aboutPageContent}
				mediaFiles={mediaFiles}
			/>
			<CouponSection
				aboutContent={aboutPageData?.aboutPageContent}
				mediaFiles={mediaFiles}
			/>

			<Image src={bg} alt="bg" className="" />
		</>
	);
};

export default AboutUs;

export async function getStaticProps({ locale }) {
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const aboutPageContent = await client.getEntry('1avqdPlivriDBLwDOG0bI5', {
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
			aboutPageData: {
				aboutPageContent: aboutPageContent.fields,
				navbar: navbar.fields,
				whiteLogo: whiteLogo.fields.file,
				footer: footer.fields,
				logo: logo.fields.file,
			},
		},
	};
}
