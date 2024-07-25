import { useEffect } from 'react';
import { client, managementClient } from '../src/libs/contentful';
import { useContentContext } from '../src/context/ContentContext';
import Hero from '../src/components/home/HeroSection';
import BoxesSection from '../src/components/home/BoxesSection';
import AboutSection from '../src/components/home/AboutSection';
import GallerySection from '../src/components/home/GallerySection';
import AdsSection from '../src/components/home/AdsSection';
import StatsSection from '../src/components/home/StatsSection';

export default function Home({ homePageData }) {
	const { setNavbar, mediaFiles, setMediaFiles, setHomeContent, setFooter } =
		useContentContext();

	useEffect(() => {
		setHomeContent(homePageData.homePageContent);
		setNavbar(homePageData.navbar);
		setFooter(homePageData.footer);
		setMediaFiles({
			...mediaFiles,
			logo: homePageData.logo,
			homeBoxes: homePageData.homeBoxes,
			careLogo: homePageData.careLogo,
			couponLogo: homePageData.couponLogo,
			nutritionIcon: homePageData.nutritionIcon,
			careIcon: homePageData.careIcon,
			couponIcon: homePageData.couponIcon,
			ad: homePageData.ad,
			sliderImages: homePageData.sliderImages,
		});
	}, [homePageData]);

	return (
		<div className="mb-24 lg:mb-44">
			<Hero
				homeContent={homePageData.homePageContent}
				mediaFiles={mediaFiles}
			/>
			<BoxesSection
				homeContent={homePageData.homePageContent}
				mediaFiles={mediaFiles}
			/>
			<div className="px-5 lg:px-0">
				<AboutSection
					homeContent={homePageData.homePageContent}
					mediaFiles={mediaFiles}
				/>
			</div>
			<div>
				<GallerySection homeContent={homePageData.homePageContent} />
			</div>
			<AdsSection
				homeContent={homePageData.homePageContent}
				mediaFiles={mediaFiles}
			/>
			<div className="px-5 lg:px-0">
				<StatsSection
					homeContent={homePageData.homePageContent}
					mediaFiles={mediaFiles}
				/>
			</div>
		</div>
	);
}

export async function getStaticProps({ locale }) {
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const homePageContent = await client.getEntry('61qT50WdzDgkf7CXOvnZ63', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz');
	const couponLogo = await client.getAsset('tiYfuNDOSWFFfSZRIvL7I');
	const careLogo = await client.getAsset('4acavYIbVXnmQ2NGhWRFja');
	const ad = await client.getAsset('1qKY2fYfXH3IK3BMLAx7Qq');
	const homeBoxes = await client.getAsset('2ftDgx0VmeTBYtv6o49ex');
	const couponIcon = await client.getAsset('1HY8xdoQhqokWK5LMToDYc');
	const careIcon = await client.getAsset('6HFfJEb6eWZjOk5ypHFE36');
	const nutritionIcon = await client.getAsset('6M47V7S0yMbujUlWXWX6Ma');
	const space = await managementClient.getSpace(
		process.env.CONTENTFUL_SPACE_ID
	);
	const environment = await space.getEnvironment('master');
	const sliderImages = await environment.getAssets({
		'metadata.tags.sys.id[in]': 'imagesSlider',
	});

	return {
		props: {
			homePageData: {
				homePageContent: homePageContent.fields,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
				careLogo: careLogo.fields.file,
				couponLogo: couponLogo.fields.file,
				ad: ad.fields.file,
				homeBoxes: homeBoxes.fields.file,
				careIcon: careIcon.fields.file,
				couponIcon: couponIcon.fields.file,
				nutritionIcon: nutritionIcon.fields.file,
				sliderImages: sliderImages.items,
			},
		},
	};
}
