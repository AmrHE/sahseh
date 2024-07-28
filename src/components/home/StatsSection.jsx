import React from 'react';
import { useRouter } from 'next/router';

const StatsSection = ({ homeContent, mediaFiles }) => {
	const router = useRouter();
	return (
		<div className="container flex gap-12 lg:gap-0 lg:flex-row flex-col justify-between lg:p-20 px-6 py-14 mt-20 bg-green-lightest border border-solid border-[#E5F5BD] rounded-xl">
			<div className="flex flex-col rtl:text-start leading-[150%] basis-3/4">
				<p className="lg:text-4xl text-xl text-[#159865] font-bold mb-5">
					{homeContent?.statsTitle}
				</p>
				<p className="mb-10 text-lg font-medium lg:text-xl text-green-darker">
					{homeContent?.statsDescription}
				</p>
				<p className="text-lg font-semibold text-black lg:text-xl">
					{homeContent?.statsHighlight}
				</p>
			</div>
			<div className="flex items-center justify-center basis-1/12">
				<button
					onClick={() => router.push('/about-us')}
					className="w-40 py-4 text-xl font-semibold rounded-lg bg-green-secondary"
				>
					{homeContent?.statsCta}
				</button>
			</div>
		</div>
	);
};

export default StatsSection;
