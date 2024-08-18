import React, { useEffect } from 'react';
import Image from 'next/image';

import { client } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';
import HeroSection from '../../src/components/nutrition/HeroSection';
import IdeaSection from '../../src/components/nutrition/IdeaSection';
import GoalsSection from '../../src/components/nutrition/GoalsSection';
import Partners from '../../src/components/nutrition/Partners';
import Head from 'next/head';

const Nutrition = ({ sahsehNutritionData }) => {
	const { setNavbar, mediaFiles, setMediaFiles, setFooter } =
		useContentContext();

	useEffect(() => {
		setFooter(sahsehNutritionData.footer);
		setNavbar(sahsehNutritionData.navbar);
		setMediaFiles({
			...mediaFiles,
			logo: sahsehNutritionData.logo,
			whiteLogo: sahsehNutritionData.whiteLogo,
			nutritionEye: sahsehNutritionData.nutritionEye,
		});
	}, [sahsehNutritionData]);

	return (
		<>
			<Head>
				<title>{sahsehNutritionData?.nutritionPageContent.seoTitle}</title>
				<meta
					name="description"
					content={sahsehNutritionData?.nutritionPageContent.seoDescription}
				/>
				<meta
					name="keywords"
					content={
						sahsehNutritionData?.nutritionPageContent.seoKeywords &&
						sahsehNutritionData?.nutritionPageContent.seoKeywords
					}
				/>
			</Head>
			<div className="mb-24 lg:mb-44">
				<HeroSection
					mediaFiles={mediaFiles}
					nutritionContent={sahsehNutritionData.nutritionPageContent}
				/>
				<IdeaSection
					mediaFiles={mediaFiles}
					nutritionContent={sahsehNutritionData.nutritionPageContent}
				/>
				<GoalsSection
					mediaFiles={mediaFiles}
					nutritionContent={sahsehNutritionData.nutritionPageContent}
				/>
				<Partners
					mediaFiles={mediaFiles}
					nutritionContent={sahsehNutritionData.nutritionPageContent}
				/>
			</div>
		</>
	);
};

export default Nutrition;

export async function getStaticProps({ locale }) {
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const nutritionPageContent = await client.getEntry('2dzKefw7fRK9eBU7VN3nib', {
		locale,
	});
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz', {
		locale,
	});
	const whiteLogo = await client.getAsset('1hk88EcrYjfrohZJuLEie2', {
		locale,
	});
	const nutritionEye = await client.getAsset('RrEnPRMLD0grOESjeNYqw', {
		locale,
	});

	return {
		props: {
			sahsehNutritionData: {
				nutritionPageContent: nutritionPageContent.fields,
				whiteLogo: whiteLogo.fields.file,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
				nutritionEye: nutritionEye.fields.file,
			},
		},
	};
}
