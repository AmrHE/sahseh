import React from 'react';
import Image from 'next/image';
import careEye from '../../../public/care-eye.svg';
import bg from '../../../public/care-bottom-bg.svg';

const Partners = ({ sahsehCareContent, mediaFiles }) => {
	return (
		<div className="relative mt-24 lg:mt-48 rounded-[20px]">
			<div className="container z-50 bg-care_partners-gradient2 rounded-[20px]">
				<div className="bg-care_partners-gradient lg:pb-16 rounded-[20px]">
					<div className="flex flex-col items-center justify-center">
						<p className="rtl:lg:w-[336px] ltr:lg:lg:w-[450px] w-[290px] text-center text-[#284BC9] text-[22px] lg:text-[40px] leading-[194%] font-bold mt-8">
							{sahsehCareContent.partnersTitle}
						</p>
						<p className="text-[#090A37] rtl:lg:w-[336px] ltr:lg:lg:w-[450px] w-[290px] text-center text-xl leading-[166%] font-arabswell">
							{sahsehCareContent.partnersText}
						</p>
					</div>

					<div className="relative flex justify-center mt-4">
						<Image src={careEye} alt="partners" priority />
					</div>
				</div>
			</div>

			<Image
				src={bg}
				alt="bg"
				className="absolute mt-2 sm:-mt-8 lg:-mt-20 -z-20"
			/>
		</div>
	);
};

export default Partners;
