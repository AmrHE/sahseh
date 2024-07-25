'use client';
import React from 'react';
import Image from 'next/image';

import box from '../../../public/nutrition-idea.svg';
import boxMob from '../../../public/nutrition-idea-mob.svg';
import bulbMob from '../../../public/light-bulb-mob.svg';
import decoration from '../../../public/nutrition-idea-decoration.svg';
import boxDecoration from '../../../public/nutrition-box-decoration.svg';
import eclipse from '../../../public/nutrition-eclipse.svg';

const IdeaSection = ({ mediaFiles, nutritionContent }) => {
	return (
		<div className="space-y-8 lg:-mt-[150px] relative flex flex-col-reverse lg:flex-row ">
			<Image
				src={eclipse}
				alt="eclipse"
				className="absolute top-0 rtl:translate-x-1/3 ltr:-translate-x-1/3 -translate-y-1/3 rtl:right-0 ltr:left-0"
			/>
			<div className="relative basis-1/2">
				<Image src={boxDecoration} alt="box" className="hidden lg:block" />
				<Image
					src={box}
					alt="box"
					className="lg:-mt-[820px] -mt-[750px] ps-12 hidden lg:block"
				/>
				<div className="flex items-center justify-center lg:hidden">
					<Image
						src={boxMob}
						alt="box"
						className="self-center block ps-12 lg:hidden"
					/>
				</div>
			</div>
			<div className="basis-1/2">
				<div className="flex">
					<div className="relative mx-3">
						<Image
							src={decoration}
							alt="decoration"
							className="hidden lg:block"
						/>
						<Image
							src={bulbMob}
							alt="bulb"
							className="-translate-x-2 hidden lg:block -mt-[152px]"
						/>
						<Image
							src={decoration}
							alt="decoration"
							className="block lg:hidden"
							width={85}
							height={85}
						/>
						<Image
							src={bulbMob}
							alt="bulb"
							width={85}
							height={85}
							className="lg:hidden block -translate-x-1 -mt-[120px]"
						/>
					</div>
					<p className="font-bold text-[22px] lg:text-4xl leading-4 text-[#026C34] mt-16 mx-2">
						{nutritionContent.ideaTitle}
					</p>
				</div>
				<p className="px-4 my-5 leading-[181%] text-base lg:text-[26px]">
					{nutritionContent.ideaDescription}
				</p>
			</div>
		</div>
	);
};

export default IdeaSection;
