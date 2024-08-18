import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { client, managementClient } from '../../src/libs/contentful';
import { useContentContext } from '../../src/context/ContentContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div onClick={onClick} className={`arrow ${className}`}>
			<ChevronRight className="rtl:flip_image" style={{ color: 'black' }} />
		</div>
	);
};
const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div onClick={onClick} className={`arrow ${className}`}>
			<ChevronLeft className="rtl:flip_image" style={{ color: 'black' }} />
		</div>
	);
};

const NutritionPartners = ({ nutritionPartnersData }) => {
	const [selectedFilter, setSelectedFilter] = useState('strategic');
	const sliderRef = useRef(null);

	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplaySpeed: 1000,
		pauseOnHover: true,
		pauseOnFocus: false,
		nextArrow: <SamplePrevArrow />,
		prevArrow: <SampleNextArrow />,
		rtl: true,
	};

	const types = [
		{
			id: 'strategic',
			title: nutritionPartnersData.nutritionPartnersContent.partnerType1,
		},
		{
			id: 'platinum',
			title: nutritionPartnersData.nutritionPartnersContent.partnerType2,
		},
		{
			id: 'golden',
			title: nutritionPartnersData.nutritionPartnersContent.partnerType3,
		},
		{
			id: 'silver',
			title: nutritionPartnersData.nutritionPartnersContent.partnerType4,
		},
		{
			id: 'meals',
			title: nutritionPartnersData.nutritionPartnersContent.partnerType5,
		},
	];

	const { setNavbar, mediaFiles, setMediaFiles, setFooter } =
		useContentContext();

	useEffect(() => {
		setFooter(nutritionPartnersData.footer);
		setNavbar(nutritionPartnersData.navbar);
		setMediaFiles({
			...mediaFiles,
			logo: nutritionPartnersData.logo,
			whiteLogo: nutritionPartnersData.whiteLogo,
		});
	}, [nutritionPartnersData]);

	return (
		<>
			<Head>
				<title>
					{nutritionPartnersData?.nutritionPartnersContent.seoTitle}
				</title>
				<meta
					name="description"
					content={
						nutritionPartnersData?.nutritionPartnersContent.seoDescription
					}
				/>
				<meta
					name="keywords"
					content={
						nutritionPartnersData?.nutritionPartnersContent.seoKeywords &&
						nutritionPartnersData?.nutritionPartnersContent.seoKeywords
					}
				/>
			</Head>
			<div className="mx-10 mb-24 lg:mb-44">
				<div>
					<h1 className="font-bold mt-8 text-2xl mb-6 lg:text-[30px] text-[#1A3129]">
						{nutritionPartnersData.nutritionPartnersContent.title}
					</h1>

					<div className="flex gap-5 flex-wrap text-lg lg:text-2xl leading-10 text-[#626262] mb-14">
						{types.map((type) => (
							<p
								key={type.id}
								onClick={() => setSelectedFilter(type.id)}
								className={`bg-[#DEDEDE] bg-opacity-30 py-3 px-9 rounded-xl cursor-pointer ${
									selectedFilter === type.id
										? 'bg-[#15440D] font-semibold bg-opacity-100 text-white'
										: ''
								}`}
							>
								{type.title}
							</p>
						))}
					</div>
					<p className="text-2xl lg:text-[40px] leading-[72px] font-bold text-[#102D0A] py-4 hidden lg:block">
						{types.filter((type) => type.id === selectedFilter)[0].title}
					</p>
				</div>
				{(() => {
					switch (selectedFilter) {
						case 'strategic':
							return (
								<Slider ref={sliderRef} {...settings}>
									{nutritionPartnersData.strategicPartners &&
										nutritionPartnersData.strategicPartners.map((item, i) => (
											<Image
												key={i}
												className="rounded-xl"
												src={`http:${item.fields.file['en-US'].url}`}
												alt=""
												width={item.fields.file['en-US'].details.image.width}
												height={item.fields.file['en-US'].details.image.height}
											/>
										))}
								</Slider>
							);

						case 'platinum':
							return (
								<Slider ref={sliderRef} {...settings}>
									{nutritionPartnersData.platinumPartners &&
										nutritionPartnersData.platinumPartners.map((item, i) => (
											<Image
												key={i}
												className="rounded-xl"
												src={`http:${item.fields.file['en-US'].url}`}
												alt=""
												width={item.fields.file['en-US'].details.image.width}
												height={item.fields.file['en-US'].details.image.height}
											/>
										))}
								</Slider>
							);

						case 'golden':
							return (
								<Slider ref={sliderRef} {...settings}>
									{nutritionPartnersData.goldenPartners &&
										nutritionPartnersData.goldenPartners.map((item, i) => (
											<Image
												key={i}
												className="rounded-xl"
												src={`http:${item.fields.file['en-US'].url}`}
												alt=""
												width={item.fields.file['en-US'].details.image.width}
												height={item.fields.file['en-US'].details.image.height}
											/>
										))}
								</Slider>
							);
						case 'silver':
							return (
								<Slider ref={sliderRef} {...settings}>
									{nutritionPartnersData.silverPartners &&
										nutritionPartnersData.silverPartners.map((item, i) => (
											<Image
												key={i}
												className="rounded-xl"
												src={`http:${item.fields.file['en-US'].url}`}
												alt=""
												width={item.fields.file['en-US'].details.image.width}
												height={item.fields.file['en-US'].details.image.height}
											/>
										))}
								</Slider>
							);
						case 'meals':
							return (
								<Slider ref={sliderRef} {...settings}>
									{nutritionPartnersData.mealsPartners &&
										nutritionPartnersData.mealsPartners.map((item, i) => (
											<Image
												key={i}
												className="rounded-xl"
												src={`http:${item.fields.file['en-US'].url}`}
												alt=""
												width={item.fields.file['en-US'].details.image.width}
												height={item.fields.file['en-US'].details.image.height}
											/>
										))}
								</Slider>
							);

						default:
							return null;
					}
				})()}
			</div>
		</>
	);
};

export default NutritionPartners;

export async function getStaticProps({ locale }) {
	const navbar = await client.getEntry('4Gg2tT8MmLwkIQyYyhTckP', {
		locale,
	});
	const footer = await client.getEntry('7Hmn6qQE2OZ6X4mkzoSfwe', {
		locale,
	});
	const nutritionPartnersContent = await client.getEntry(
		'49P3NNW3SJeshV5GXUZtA3',
		{
			locale,
		}
	);
	const logo = await client.getAsset('2pn2arIDDrmXgxdHY0O7Tz', {
		locale,
	});
	const whiteLogo = await client.getAsset('1hk88EcrYjfrohZJuLEie2', {
		locale,
	});

	const space = await managementClient.getSpace(
		process.env.CONTENTFUL_SPACE_ID
	);
	const environment = await space.getEnvironment('master');
	const strategicPartners = await environment.getAssets({
		'metadata.tags.sys.id[in]': 'strategicPartners',
		locale,
	});
	const platinumPartners = await environment.getAssets({
		'metadata.tags.sys.id[in]': 'platinumPartners',
		locale,
	});
	const goldenPartners = await environment.getAssets({
		'metadata.tags.sys.id[in]': 'goldenPartners',
		locale,
	});
	const silverPartners = await environment.getAssets({
		'metadata.tags.sys.id[in]': 'silverPartners',
		locale,
	});
	const mealsPartners = await environment.getAssets({
		'metadata.tags.sys.id[in]': 'mealsPartners',
		locale,
	});

	return {
		props: {
			nutritionPartnersData: {
				nutritionPartnersContent: nutritionPartnersContent.fields,
				whiteLogo: whiteLogo.fields.file,
				navbar: navbar.fields,
				footer: footer.fields,
				logo: logo.fields.file,
				strategicPartners: strategicPartners.items,
				platinumPartners: platinumPartners.items,
				goldenPartners: goldenPartners.items,
				silverPartners: silverPartners.items,
				mealsPartners: mealsPartners.items,
			},
		},
	};
}
