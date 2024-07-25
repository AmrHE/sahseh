import React from 'react';
import Image from 'next/image';

import couponImg from '../../../public/about-coupon.png';

const CouponSection = ({ aboutContent, mediaFiles }) => {
	return (
		<div className="container flex flex-col-reverse px-6 md:flex-row gap-14 md:gap-0 xl:px-32">
			<div className="flex flex-col justify-center basis-1/2">
				<p className="text-[#E2693A] font-semibold text-[22px] leading-5 lg:text-[26px] border-solid border-b-4 pb-5 mb-7 border-[#E2693A]  w-fit rtl:pl-12 ltr:pr-12">
					{aboutContent.couponTitle}
				</p>
				<p className="font-bold my-3 lg:text-3xl text-[#222222] text-xl leading-[170%]">
					{aboutContent.couponDescription}
				</p>
				<p className="font-medium text-[#444242] text-base lg:text-xl mt-9">
					{aboutContent.couponText}
					<span className="text-[#259D19]">{aboutContent.couponHighlight}</span>
				</p>
				<button className="w-full cursor-wait py-3 my-12 text-2xl font-semibold text-black transition duration-300 sm:w-2/3 lg:h-16 lg:w-80 rounded-xl bg-[#C2C0B9] bg-opacity-30">
					{aboutContent.couponCta}
				</button>
			</div>
			<div className="flex justify-center px-12 md:px-0 md:justify-end basis-1/2">
				<Image src={couponImg} alt="test" />
			</div>
		</div>
	);
};

export default CouponSection;
