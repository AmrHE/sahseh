import React from 'react';
import Image from 'next/image';
import careEye from '../../../public/care-eye.svg';
import bg from '../../../public/care-bottom-bg.webp';

const Partners = ({ sahsehCareContent, mediaFiles }) => {
	console.log(mediaFiles.careEye);
	return (
		<div className="relative mt-24 lg:mt-48 rounded-[20px] mx-5 lg:mx-0">
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
						{mediaFiles.careEye && (
							<Image
								src={`http:${mediaFiles?.careEye?.url}`}
								width={mediaFiles?.careEye?.details?.image?.width}
								height={mediaFiles?.careEye?.details?.image?.height}
								alt="partners"
								priority
							/>
						)}
					</div>
				</div>
			</div>

			<Image
				src={bg}
				alt="bg"
				className="absolute mt-0 opacity-50 sm:-mt-36 lg:-mt-52 -z-20"
			/>
		</div>
	);
};

export default Partners;
