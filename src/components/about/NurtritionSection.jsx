import React from 'react';
import Image from 'next/image';

import nutritionImg from '../../../public/about-nutrition.png';

const NurtritionSection = ({ aboutContent, mediaFiles }) => {
	return (
		<div className="container flex flex-col-reverse px-6 md:flex-row -mt-72 mb-36 lg:mb-44 lg:-mt-52 xl:-mt-72 gap-14 md:gap-0 xl:px-32">
			<div className="flex flex-col justify-center basis-1/2">
				<p className="text-[#259D19] font-semibold text-[22px] leading-5 lg:text-[26px] border-solid border-b-4 pb-5 mb-7 border-[#259D19]  w-fit rtl:pl-12 ltr:pr-12">
					{aboutContent.nutritionTitle}
				</p>
				<p className="font-bold my-3 lg:text-3xl text-[#222222] text-xl leading-[170%]">
					{aboutContent.nutritionDescription}
				</p>
				<p className="font-bold my-3 lg:text-3xl text-[#0D7145] text-xl leading-[170%]">
					{aboutContent.nutritionHighlight}
				</p>
				<p className="font-medium text-[#444242] text-base lg:text-xl mt-9">
					{aboutContent.nutritionText}
				</p>
				<button
					className="w-full py-3 my-12 text-2xl font-semibold text-white transition duration-300 hover:text-black sm:w-2/3 lg:h-16 lg:w-80 rounded-xl bg-green-primary hover:bg-yellow-primary"
					onClick={() => router.push('/sahseh-nutrition')}
				>
					{aboutContent.nutritionCta}
				</button>
			</div>
			<div className="flex justify-center px-12 md:px-0 md:justify-end basis-1/2">
				<Image
					src={nutritionImg}
					alt="nutrition image"
					className="ltr:flip_image"
				/>
			</div>
		</div>
	);
};

export default NurtritionSection;
