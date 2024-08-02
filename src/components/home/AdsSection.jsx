import React from 'react';
import Image from 'next/image';

import adsLogos from '../../../public/ad-logos.png';
import adsDecoration from '../../../public/ads-decoration.png';
import adsBottom from '../../../public/ads-bottom.png';

const AdsSection = ({ homeContent, mediaFiles }) => {
	return (
		<div className="mb-10">
			<div className="py-10 bg-yellow-primary">
				<div className="container flex flex-col items-center justify-center gap-6 text-green-darker">
					<p className="text-[22px] font-bold lg:text-4xl px-4 lg:px-0">
						{homeContent.adsTitle}
					</p>
					<p className="text-xl lg:text-[26px]">{homeContent.adsText1}</p>
					<p className="text-xl lg:text-[26px]">{homeContent.adsText2}</p>
					<p className="mt-10 text-xl font-medium lg:text-4xl text-yellow-dark">
						{homeContent.adsHighlight}
					</p>
				</div>

				<div className="relative mx-5 lg:mx-72">
					<Image
						className="hidden lg:absolute -left-48 -top-32 rtl:flip_image"
						src={adsDecoration}
						alt="ads-decoration-1"
					/>
					<div className="flex items-center justify-center my-10 bg-white lg:p-20 py-11">
						<Image src={adsLogos} alt="ads" />
					</div>
					<Image
						className="hidden lg:absolute -right-48 -top-32 "
						src={adsDecoration}
						alt="ads-decoration-2"
					/>
				</div>
			</div>
			<Image src={adsBottom} className="-mt-1" alt="ads-bottom" />
		</div>
	);
};

export default AdsSection;
