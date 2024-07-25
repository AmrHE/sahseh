import React from 'react';
import birds from '../../../public/birds.png';
import Image from 'next/image';

const AboutBox = ({ aboutContent, mediaFiles }) => {
	return (
		<div className="min-h-[80vh] bg-hero-gradient">
			<div className="container px-6 py-4 xl:px-32 lg:py-14">
				<div className="relative flex flex-col px-5 py-8 text-center rounded-xl bg-about-gradient lg:px-36 lg:py-14">
					<h1 className="text-2xl font-bold lg:text-3xl text-green-darker">
						{aboutContent.aboutTitle}
					</h1>
					<h4 className="text-base md:text-lg lg:text-2xl font-medium text-[#15440D] pt-5">
						{aboutContent.aboutDescription}
					</h4>

					<Image
						src={birds}
						alt="birds"
						className="absolute bottom-0 hidden -translate-x-1/2 translate-y-1/2 lg:block rtl:left-0 ltr:right-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutBox;
