import React, { useEffect } from 'react';
import { client } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';
import HeroSection from '../../src/components/about/HeroSection';
import AboutBox from '../../src/components/about/AboutBox';
import NurtritionSection from '../../src/components/about/NurtritionSection';
import CareSection from '../../src/components/about/CareSection';
import CouponSection from '../../src/components/about/CouponSection';

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
		});
	}, [aboutPageData]);

	return (
		<div className="mb-24 lg:mb-44">
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
		</div>
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

	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz');
	return {
		props: {
			aboutPageData: {
				aboutPageContent: aboutPageContent.fields,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
			},
		},
	};
}
