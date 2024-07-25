import React from 'react';
import Image from 'next/image';
import nutritionEye from '../../../public/nutrition-eye.svg';

import decoration_1 from '../../../public/nutrition-partners-decoration_1.svg';
import decoration_2 from '../../../public/nutrition-partners-decoration_2.svg';
const Partners = ({ mediaFiles, nutritionContent }) => {
	return (
		<div className="relative mt-24 lg:mt-48 rounded-[20px] mx-5 lg:mx-0">
			<div className="container z-50 bg-nutrition_partners-gradient rounded-[20px]">
				<div className="flex flex-col items-center justify-center">
					<p className="rtl:lg:w-[336px] ltr:lg:w-[450px] w-[290px] text-center text-[#026C34] text-[22px] lg:text-[40px] leading-[194%] font-bold mt-8">
						{nutritionContent.partnersTitle}
					</p>
					<p className="text-[#090A37] rtl:lg:w-[336px] ltr:lg:w-[450px] w-[290px] text-center text-xl leading-[166%] font-arabswell">
						{nutritionContent.partnersText}
					</p>
				</div>

				<div className="relative flex justify-center mt-4">
					<Image
						src={decoration_1}
						alt="partners"
						className="absolute hidden lg:block ltr:flip_image rtl:right-0 ltr:left-0 top-1/3"
					/>
					<Image
						src={decoration_1}
						alt="partners"
						width={173}
						height={109}
						className="absolute block lg:hidden ltr:flip_image rtl:right-0 ltr:left-0 top-[65%]"
					/>
					<Image src={nutritionEye} alt="partners" className="pb-40 lg:pb-0" />
					<Image
						src={decoration_2}
						alt="partners"
						className="absolute hidden lg:block ltr:flip_image rtl:left-0 ltr:right-0 top-[20%]"
					/>
					<Image
						src={decoration_2}
						alt="partners"
						width={173}
						height={109}
						className="absolute block lg:hidden ltr:flip_image rtl:left-0 ltr:right-0 top-[60%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Partners;
