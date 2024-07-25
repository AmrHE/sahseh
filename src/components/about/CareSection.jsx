import React from 'react';
import Image from 'next/image';

import careImg from '../../../public/about-care.png';

const CareSection = ({ aboutContent, mediaFiles }) => {
	return (
		<div className="container flex flex-col-reverse px-6 md:flex-row-reverse mb-36 lg:mb-44 gap-14 md:gap-0 xl:px-32">
			<div className="flex flex-col justify-center basis-1/2">
				<p className="text-[#284BC9] font-semibold text-[22px] leading-5 lg:text-[26px] border-solid border-b-4 pb-5 mb-7 border-[#284BC9]  w-fit rtl:pl-12 ltr:pr-12">
					{aboutContent.careTitle}
				</p>
				<p className="font-bold my-3 lg:text-3xl text-[#222222] text-xl leading-[170%]">
					{aboutContent.careDescription}
				</p>
				<p className="font-bold my-3 lg:text-3xl text-[#284BC9] text-xl leading-[170%]">
					{aboutContent.careHighlight}
				</p>
				<p className="font-medium text-[#444242] text-base lg:text-xl mt-9">
					{aboutContent.careText}
				</p>
				<button
					className="w-full py-3 my-12 text-2xl font-semibold text-white transition duration-300 hover:text-black sm:w-2/3 lg:h-16 lg:w-80 rounded-xl bg-blue-primary hover:bg-yellow-primary"
					onClick={() => router.push('/register')}
				>
					{aboutContent.careCta}
				</button>
			</div>
			<div className="flex justify-center px-12 md:px-0 md:justify-start basis-1/2">
				<Image src={careImg} alt="test" />
			</div>
		</div>
	);
};

export default CareSection;
