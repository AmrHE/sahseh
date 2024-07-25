import React from 'react';
import Image from 'next/image';

import heroImg from '../../../public/care-bg.svg';
import heroImgMob from '../../../public/care-bg-mob.svg';
import heroImgTablet from '../../../public/care-bg-tablet.svg';
import BoxCanvas from '../care-3d-models/BoxCanvas';

const HeroSection = ({ sahsehCareContent, mediaFiles }) => {
	return (
		<div className="pt-24 lg:pt-[140px] min-h-[70vh] sm:min-h-[100vh] lg:min-h-[125vh] relative">
			<Image
				src={heroImgMob}
				className="absolute block sm:hidden -z-10"
				alt="hero"
				fill
				objectFit="cover"
			/>
			<Image
				src={heroImgTablet}
				className="absolute hidden sm:block xl:hidden -z-10"
				alt="hero"
				fill
				objectFit="cover"
			/>
			<Image
				src={heroImg}
				className="absolute hidden xl:block -z-10"
				alt="hero"
			/>
			<div className="container flex flex-col items-center px-5 lg:flex-row">
				<div className="h-full basis-1/2 lg:py-28 py-14">
					<>
						<p className="text-white font-arabswell leading-[166%] text-[22px] lg:text-[33px] ">
							{sahsehCareContent.heroTitle}
						</p>
						<p className="text-white font-arabswell leading-[166%] text-[22px] lg:text-[33px] ">
							{sahsehCareContent.heroTitle2}
						</p>
						<p className="text-white font-arabswell leading-[166%] text-[22px] lg:text-[33px] ">
							{sahsehCareContent.heroTitle3}
						</p>
					</>

					<div className="font-semibold text-base lg:font-bold lg:text-3xl leading-[166%] text-blue-primary mt-10">
						<p> {sahsehCareContent.heroDescription}</p>
					</div>
				</div>

				<div className="basis-1/2">
					<BoxCanvas />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
