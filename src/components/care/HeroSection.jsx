import React from 'react';
import Image from 'next/image';

import heroImg from '../../../public/care-bg.svg';
import heroImgMob from '../../../public/care-bg-mob.svg';
import heroImgTablet from '../../../public/care-bg-tablet.svg';
import BoxCanvas from '../care-3d-models/BoxCanvas';

const HeroSection = ({ sahsehCareContent, mediaFiles }) => {
	return (
		<div className="relative">
			<Image
				priority
				src={heroImgMob}
				className="absolute block sm:hidden -z-10 ltr:flip_image"
				alt="hero"
				fill
				objectFit="cover"
			/>
			<Image
				priority
				src={heroImgTablet}
				className="absolute hidden sm:block xl:hidden -z-10 ltr:flip_image"
				alt="hero"
				fill
				objectFit="cover"
			/>
			<Image
				priority
				src={heroImg}
				className="absolute hidden xl:block -z-10 ltr:flip_image"
				alt="hero"
			/>
			<div className="container flex flex-col items-center px-5 lg:flex-row">
				<div className="h-full basis-1/2 lg:py-40 py-14">
					<>
						<p className="text-white font-mataryah leading-[166%] text-[22px] lg:text-[33px] ">
							{sahsehCareContent.heroTitle}
						</p>
					</>
					<div className="font-semibold text-base lg:font-bold lg:text-3xl leading-[166%] text-blue-primary mt-10 lg:mt-28">
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
