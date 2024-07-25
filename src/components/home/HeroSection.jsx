'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import adsSun from '../../../public/ads-sun.png';

import { useContentContext } from '../../context/ContentContext';
import mobHero from '../../../public/mob-hero.png';

const Hero = ({ homeContent, mediaFiles }) => {
	// const { homeContent, mediaFiles } = useContentContext();
	const [currentWidth, setCurrentWidth] = useState();

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
		<div className="min-h-[70vh] sm:min-h-[100vh] lg:min-h-[125vh] lg:pt-52 pt-24 bg-hero-gradient">
			<div className="rounded-xl">
				{mediaFiles.ad && (
					<div className="container relative px-5 md:px-10 lg:px-0">
						{currentWidth && currentWidth > 1024 ? (
							<Image
								src={`http:${mediaFiles?.ad?.url}`}
								width={mediaFiles?.ad?.details?.image?.width}
								height={mediaFiles?.ad?.details?.image?.height}
								alt="ad"
								className="rounded-xl ltr:flip_image"
							/>
						) : (
							<Image
								src={mobHero}
								width={1000}
								alt="ad"
								className="rounded-xl ltr:flip_image"
							/>
						)}
						<div className="absolute space-y-8 lg:space-y-16 bottom-10 lg:bottom-0 lg:top-[10%] lg:rtl:left-[4%] lg:ltr:right-[4%] text-white px-5 md:px-10 lg:px-0">
							<div className="space-y-4">
								<Image src={adsSun} width={100} height={50} alt="ads-sun" />
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
								<button className="w-40 h-11 lg:w-[19.5rem] lg:h-[5rem] text-lg font-semibold text-black transition duration-200 bg-yellow-primary hover:bg-white rounded-lg ltr:rounded-xl">
									{homeContent.heroAdCta}
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;
