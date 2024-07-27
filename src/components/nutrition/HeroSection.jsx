import React from 'react';
import Image from 'next/image';

import heroImg from '../../../public/nutrition-bg.svg';
import heroImgMob from '../../../public/nutrition-bg-mob.svg';
import heroImgTablet from '../../../public/nutrition-bg-tablet.svg';

import BoxCanvas from '../nutrition-3d-models/BoxCanvas';

const HeroSection = ({ mediaFiles, nutritionContent }) => {
	console.log({ nutritionContent });
	return (
		<div className="pt-24 lg:pt-[140px] min-h-[70vh] sm:min-h-[100vh] lg:min-h-[125vh] relative">
			<Image
				src={heroImgMob}
				className="absolute block sm:hidden -z-10 ltr:flip_image"
				alt="hero"
				fill
				priority
				objectFit="cover"
			/>
			<Image
				src={heroImgTablet}
				className="absolute hidden sm:block xl:hidden -z-10 ltr:flip_image"
				alt="hero"
				fill
				priority
				objectFit="cover"
			/>
			<Image
				src={heroImg}
				className="absolute hidden xl:block -z-10 ltr:flip_image"
				alt="hero"
				priority
			/>
			<div className="container flex flex-col items-center px-5 lg:flex-row">
				<div className="h-full basis-1/2 lg:py-40 py-14">
					<>
						<p className="text-white font-arabswell leading-[166%] text-[22px] lg:text-[33px] ">
							{nutritionContent?.heroTitle}
						</p>
					</>

					<div className="font-semibold text-base lg:font-bold lg:text-3xl leading-[166%] text-white mt-10">
						<p>{nutritionContent?.heroDescription}</p>
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
