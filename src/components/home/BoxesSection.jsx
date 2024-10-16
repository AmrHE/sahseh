'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BoxesSection = ({ mediaFiles, homeContent }) => {
	const router = useRouter();

	return (
		<div className="flex flex-col-reverse lg:flex-row mt-20 xl:rtl:mr-[10%] xl:ltr:ml-[10%]">
			<div className="flex flex-col items-center gap-2 py-10 lg:gap-5 lg:items-start basis-1/3">
				<p>
					<span className="text-xl md:text-3xl lg:text-[40px] font-semibold leading-[185%] text-green-darker">
						{homeContent?.boxesSectionTitle}
					</span>
					<span className="text-xl md:text-3xl lg:text-[40px] font-semibold leading-[185%] text-green-light">
						{homeContent?.boxesSectionSahseh}
					</span>
				</p>
				<p className="text-xl md:text-2xl lg:text-3xl font-light leading-[185%] text-green-darker">
					{homeContent?.boxesSectionSubtitle}
				</p>
				<button
					className="w-5/6 py-3 my-12 text-2xl font-semibold text-white transition duration-300 sm:w-2/3 lg:h-20 lg:w-96 rounded-xl bg-green-primary hover:bg-yellow-primary hover:text-black"
					onClick={() => router.push('/register-now')}
				>
					{homeContent?.boxesSectionCta}
				</button>
			</div>
			<div className="basis-2/3">
				{mediaFiles?.homeBoxes && (
					<Image
						src={`http:${mediaFiles?.homeBoxes?.url}`}
						width={mediaFiles?.homeBoxes?.details?.image?.width}
						height={mediaFiles?.homeBoxes?.details?.image?.height}
						alt="homeBoxes"
					/>
				)}
			</div>
		</div>
	);
};

export default BoxesSection;
