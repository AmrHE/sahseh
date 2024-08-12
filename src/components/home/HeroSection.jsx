'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import adsSun from '../../../public/ads-sun.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ({ homeContent, mediaFiles }) => {
	const [currentWidth, setCurrentWidth] = useState();
	const sliderRef = useRef(null);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		swipeToSlide: true,
		// rtl: true,
	};

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setCurrentWidth(width);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="min-h-[70vh] sm:min-h-[100vh] lg:pt-52 pt-24 bg-hero-gradient">
			<Slider ref={sliderRef} arrows={false} {...settings}>
				{/* SLIDER 1 */}
				<div className="rounded-xl">
					{mediaFiles.ad1 && (
						<div className="container relative px-5 md:px-10 lg:px-0">
							{currentWidth && currentWidth > 1024 ? (
								<Image
									src={`http:${mediaFiles?.ad1?.url}`}
									width={mediaFiles?.ad1?.details?.image?.width}
									height={mediaFiles?.ad1?.details?.image?.height}
									alt="ad1"
									className="rounded-xl"
								/>
							) : (
								<Image
									src={`http:${mediaFiles?.ad1_mob?.url}`}
									width={688}
									height={850}
									// fill={true}
									alt="ad1_mob"
									className="rounded-xl"
								/>
							)}
							<div className="absolute space-y-8 lg:space-y-16 bottom-10 lg:bottom-0 lg:top-[10%] lg:rtl:left-[4%] lg:ltr:right-[4%] text-white px-5 md:px-10 lg:px-0">
								<div className="space-y-4">
									<Image
										src={adsSun}
										width={100}
										height={50}
										alt="ads-sun"
										className="ltr:flip_image"
									/>
									<p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[120%]">
										{homeContent.heroAdsTitle}
									</p>
									<p className="text-2xl sm:text-3xl lg:text-5xl leading-[120%] font-base">
										{homeContent.heroAdSubtitle}
									</p>
								</div>

								<div className="space-y-3 lg:space-y-8">
									<p className="text-lg sm:text-2xl lg:text-3xl">
										{homeContent.heroAdContent}
									</p>
									<button className="w-40 h-11 lg:w-[19.5rem] lg:h-[5rem] text-lg font-semibold text-black transition duration-200 bg-yellow-primary hover:bg-green-secondary rounded-lg ltr:rounded-xl">
										{homeContent.heroAdCta}
									</button>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* SLIDER 2 */}
				<div className="rounded-xl">
					{mediaFiles.ad2 && (
						<div className="container relative px-5 md:px-10 lg:px-0">
							{currentWidth && currentWidth > 1024 ? (
								<Image
									src={`http:${mediaFiles?.ad2?.url}`}
									width={mediaFiles?.ad2?.details?.image?.width}
									height={mediaFiles?.ad2?.details?.image?.height}
									alt="ad2"
									className="rounded-xl"
								/>
							) : (
								<Image
									src={`http:${mediaFiles?.ad2_mob?.url}`}
									width={688}
									height={850}
									// fill={true}
									alt="ad2_mob"
									className="rounded-xl"
								/>
							)}
							<div className="absolute space-y-8 lg:space-y-16 bottom-10 lg:bottom-0 lg:top-[10%] lg:rtl:left-[4%] lg:ltr:right-[4%] text-white px-5 md:px-10 lg:px-0">
								<div className="space-y-4">
									<Image
										src={adsSun}
										width={100}
										height={50}
										alt="ads-sun"
										className="ltr:flip_image"
									/>
									<p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[120%]">
										{homeContent.heroAdsTitle2}
									</p>
									<p className="text-2xl sm:text-3xl lg:text-5xl leading-[120%] font-base">
										{homeContent.heroAdSubtitl2}
									</p>
								</div>

								<div className="space-y-3 lg:space-y-8">
									<p className="text-lg sm:text-2xl lg:text-3xl">
										{homeContent.heroAdContent2}
									</p>
									<button className="w-40 h-11 lg:w-[19.5rem] lg:h-[5rem] text-lg font-semibold text-black transition duration-200 bg-yellow-primary hover:bg-green-secondary rounded-lg ltr:rounded-xl">
										{homeContent.heroAdCta2}
									</button>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* SLIDER 3 */}
				<div className="rounded-xl">
					{mediaFiles.ad3 && (
						<div className="container relative px-5 md:px-10 lg:px-0">
							{currentWidth && currentWidth > 1024 ? (
								<Image
									src={`http:${mediaFiles?.ad3?.url}`}
									width={mediaFiles?.ad3?.details?.image?.width}
									height={mediaFiles?.ad3?.details?.image?.height}
									alt="ad3"
									className="rounded-xl"
								/>
							) : (
								<Image
									src={`http:${mediaFiles?.ad3_mob?.url}`}
									width={688}
									height={850}
									// fill={true}
									alt="ad3_mob"
									className="rounded-xl"
								/>
							)}
							<div className="absolute space-y-8 lg:space-y-16 bottom-10 lg:bottom-0 lg:top-[10%] lg:rtl:left-[4%] lg:ltr:right-[4%] text-white px-5 md:px-10 lg:px-0">
								<div className="space-y-4">
									<Image
										src={adsSun}
										width={100}
										height={50}
										alt="ads-sun"
										className="ltr:flip_image"
									/>
									<p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[120%]">
										{homeContent.heroAdsTitle3}
									</p>
									<p className="text-2xl sm:text-3xl lg:text-5xl leading-[120%] font-base">
										{homeContent.heroAdSubtitle3}
									</p>
								</div>

								<div className="space-y-3 lg:space-y-8">
									<p className="text-lg sm:text-2xl lg:text-3xl">
										{homeContent.heroAdContent3}
									</p>
									<button className="w-40 h-11 lg:w-[19.5rem] lg:h-[5rem] text-lg font-semibold text-black transition duration-200 bg-yellow-primary hover:bg-green-secondary rounded-lg ltr:rounded-xl">
										{homeContent.heroAdCta3}
									</button>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* SLIDER 4 */}
				<div className="rounded-xl">
					{mediaFiles.ad3 && (
						<div className="container relative px-5 md:px-10 lg:px-0">
							{currentWidth && currentWidth > 1024 ? (
								<Image
									src={`http:${mediaFiles?.ad4?.url}`}
									width={mediaFiles?.ad4?.details?.image?.width}
									height={mediaFiles?.ad4?.details?.image?.height}
									alt="ad4"
									className="rounded-xl"
								/>
							) : (
								<Image
									src={`http:${mediaFiles?.ad4_mob?.url}`}
									width={688}
									height={850}
									// fill={true}
									alt="ad3_mob"
									className="rounded-xl"
								/>
							)}
							<div className="absolute space-y-8 lg:space-y-16 bottom-10 lg:bottom-0 lg:top-[10%] lg:rtl:left-[4%] lg:ltr:right-[4%] text-white px-5 md:px-10 lg:px-0">
								<div className="space-y-4">
									<Image
										src={adsSun}
										width={100}
										height={50}
										alt="ads-sun"
										className="ltr:flip_image"
									/>
									<p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[120%]">
										{homeContent.heroAdsTitle4}
									</p>
									<p className="text-2xl sm:text-3xl lg:text-5xl leading-[120%] font-base">
										{homeContent.heroAdSubtitle4}
									</p>
								</div>

								<div className="space-y-3 lg:space-y-8">
									<p className="text-lg sm:text-2xl lg:text-3xl">
										{homeContent.heroAdContent4}
									</p>
									<button className="w-40 h-11 lg:w-[19.5rem] lg:h-[5rem] text-lg font-semibold text-black transition duration-200 bg-yellow-primary hover:bg-green-secondary rounded-lg ltr:rounded-xl">
										{homeContent.heroAdCta4}
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</Slider>
		</div>
	);
};

export default Hero;
