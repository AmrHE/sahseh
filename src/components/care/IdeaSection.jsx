'use client';
import React from 'react';
import Image from 'next/image';

import bulb from '../../../public/light-bulb.svg';
import bulbMob from '../../../public/light-bulb-mob.svg';
import decoration from '../../../public/care-idea-decoration.svg';
import decorationMob from '../../../public/care-idea-decoration-mob.svg';

const IdeaSection = ({ sahsehCareContent, mediaFiles }) => {
	return (
		<div className="space-y-8 lg:-mt-[275px] relative">
			<h3 className="text-[#284BC9] font-bold text-[22px] lg:text-[40px] leading-04 px-24 lg:px-[20%] xl:px-[14%]">
				{sahsehCareContent.ideaTitle}
			</h3>

			<div className="flex relative bg-[#8DD2FD] w-11/12 lg:w-3/5 rtl:rounded-tl-full rtl:rounded-bl-full ltr:rounded-tr-full ltr:rounded-br-full rlt:ml-5 ltr:mr-5">
				<Image
					src={bulb}
					id="large"
					alt="light-bulb"
					className="absolute hidden -translate-y-1/2 ltr:flip_image rtl:translate-x-10 ltr:-translate-x-10 lg:block"
				/>
				<Image
					id="small"
					src={bulbMob}
					alt="light-bulb"
					className="absolute block -translate-y-1/2 ltr:flip_image lg:hidden"
				/>
				<p className="m-5 lg:my-10 lg:rtl:mr-60 lg:ltr:ml-60  lg:rtl:ml-11 lg:ltr:mr-11 rtl:mr-28 ltr:ml-mr-28 text-sm lg:text-[26px] leading-[181%]">
					{sahsehCareContent.ideaDescription}
				</p>
			</div>

			<Image
				src={decoration}
				alt="decoration"
				className="absolute hidden ltr:flip_image -top-32 lg:block rtl:left-0 ltr:right-0"
			/>
			<Image
				src={decorationMob}
				alt="decoration"
				className="absolute block ltr:flip_image -top-32 rtl:left-0 lg:hidden ltr:right-0"
			/>
		</div>
	);
};

export default IdeaSection;
