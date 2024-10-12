import { useEffect } from 'react';
import Head from 'next/head';

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
      whiteLogo: homePageData.whiteLogo,
      nutritionVideo: homePageData.nutritionVideo,
      careVideo: homePageData.careVideo,
      homeBoxes: homePageData.homeBoxes,
      carePoster: homePageData.carePoster,
      nutritionPoster: homePageData.nutritionPoster,
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
    <>
      <Head>
        <title>{homePageData.homePageContent.seoTitle}</title>
        <meta
          name="description"
          content={homePageData.homePageContent.seoDescription}
        />
        <meta
          name="keywords"
          content={
            homePageData.homePageContent.seoKeywords &&
            homePageData.homePageContent.seoKeywords
          }
        />
      </Head>
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
    </>
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
  const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz', {
    locale,
  });
  const whiteLogo = await client.getAsset('1hk88EcrYjfrohZJuLEie2', {
    locale,
  });
  const nutritionVideo = await client.getAsset('3156i0jym2nENNa4biwltz', {
    locale,
  });
  const careVideo = await client.getAsset('4D1giDsFo8wfsJWzsZGBZ4', {
    locale,
  });
  const couponLogo = await client.getAsset('tiYfuNDOSWFFfSZRIvL7I', {
    locale,
  });
  const careLogo = await client.getAsset('4acavYIbVXnmQ2NGhWRFja', {
    locale,
  });
  const ad1 = await client.getAsset('1qKY2fYfXH3IK3BMLAx7Qq', {
    locale,
  });
  const ad2 = await client.getAsset('5cVwEh9PhRWVGDW7EzJz0W', {
    locale,
  });
  const ad3 = await client.getAsset('5TrNkK6zRYRBGJvXPgVVs0', {
    locale,
  });
  const ad4 = await client.getAsset('6HehTVj0filPMoc5cycKl2', {
    locale,
  });
  const ad1_mob = await client.getAsset('1n64b6MU1za3uOwZb5OhP2', {
    locale,
  });
  const ad2_mob = await client.getAsset('1bRrDPjheJpVm7kz2xe3dA', {
    locale,
  });
  const ad3_mob = await client.getAsset('69ImDfWXSZYnE94XrLyKaW', {
    locale,
  });
  const ad4_mob = await client.getAsset('5dvXFsLnQxggmXHC8spOuc', {
    locale,
  });
  const homeBoxes = await client.getAsset('2ftDgx0VmeTBYtv6o49ex', {
    locale,
  });
  const couponIcon = await client.getAsset('1HY8xdoQhqokWK5LMToDYc', {
    locale,
  });
  const careIcon = await client.getAsset('6HFfJEb6eWZjOk5ypHFE36', {
    locale,
  });
  const nutritionIcon = await client.getAsset('6M47V7S0yMbujUlWXWX6Ma', {
    locale,
  });
  const carePoster = await client.getAsset('3ngvuS6j804mXpH4HEmTAC', {
    locale,
  });
  const nutritionPoster = await client.getAsset('7GrhcSc5acFan01f8rRN7g', {
    locale,
  });
  const space = await managementClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  );
  const environment = await space.getEnvironment('master');
  const sliderImages = await environment.getAssets({
    'metadata.tags.sys.id[in]': 'imagesSlider',
    locale,
  });

  return {
    props: {
      homePageData: {
        homePageContent: homePageContent.fields,
        navbar: navbar.fields,
        footer: footer.fields,
        logo: logo.fields.file,
        whiteLogo: whiteLogo.fields.file,
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
        carePoster: carePoster.fields.file,
        nutritionPoster: nutritionPoster.fields.file,
        careIcon: careIcon.fields.file,
        couponIcon: couponIcon.fields.file,
        nutritionIcon: nutritionIcon.fields.file,
        sliderImages: sliderImages.items,
      },
    },
  };
}
