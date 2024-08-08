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
			nutritionVideo: homePageData.nutritionVideo,
			careVideo: homePageData.careVideo,
			homeBoxes: homePageData.homeBoxes,
			careLogo: homePageData.careLogo,
			couponLogo: homePageData.couponLogo,
			nutritionIcon: homePageData.nutritionIcon,
			careIcon: homePageData.careIcon,
			couponIcon: homePageData.couponIcon,
			ad1: homePageData.ad1,
			ad2: homePageData.ad2,
			ad3: homePageData.ad3,
			ad4: homePageData.ad4,
			ad1_mob: homePageData.ad1_mob,
			ad2_mob: homePageData.ad2_mob,
			ad3_mob: homePageData.ad3_mob,
			ad4_mob: homePageData.ad4_mob,
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
	const nutritionVideo = await client.getAsset('3156i0jym2nENNa4biwltz');
	const careVideo = await client.getAsset('4D1giDsFo8wfsJWzsZGBZ4');
	const couponLogo = await client.getAsset('tiYfuNDOSWFFfSZRIvL7I');
	const careLogo = await client.getAsset('4acavYIbVXnmQ2NGhWRFja');
	const ad1 = await client.getAsset('1qKY2fYfXH3IK3BMLAx7Qq');
	const ad2 = await client.getAsset('5cVwEh9PhRWVGDW7EzJz0W');
	const ad3 = await client.getAsset('5TrNkK6zRYRBGJvXPgVVs0');
	const ad4 = await client.getAsset('6HehTVj0filPMoc5cycKl2');
	const ad1_mob = await client.getAsset('1n64b6MU1za3uOwZb5OhP2');
	const ad2_mob = await client.getAsset('1bRrDPjheJpVm7kz2xe3dA');
	const ad3_mob = await client.getAsset('69ImDfWXSZYnE94XrLyKaW');
	const ad4_mob = await client.getAsset('5dvXFsLnQxggmXHC8spOuc');
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
				nutritionVideo: nutritionVideo.fields.file,
				careVideo: careVideo.fields.file,
				careLogo: careLogo.fields.file,
				couponLogo: couponLogo.fields.file,
				ad1: ad1.fields.file,
				ad2: ad2.fields.file,
				ad3: ad3.fields.file,
				ad4: ad4.fields.file,
				ad1_mob: ad1_mob.fields.file,
				ad2_mob: ad2_mob.fields.file,
				ad3_mob: ad3_mob.fields.file,
				ad4_mob: ad4_mob.fields.file,
				homeBoxes: homeBoxes.fields.file,
				careIcon: careIcon.fields.file,
				couponIcon: couponIcon.fields.file,
				nutritionIcon: nutritionIcon.fields.file,
				sliderImages: sliderImages.items,
			},
		},
	};
}
