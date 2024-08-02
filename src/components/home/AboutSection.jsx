import React from 'react';
import Image from 'next/image';
import { MoveUpLeft } from 'lucide-react';
import useBreakpoint from '../../hooks/useBreakpoints';

import { useRouter } from 'next/router';

const AboutSection = ({ homeContent, mediaFiles }) => {
	const breakpoint = useBreakpoint();
	const router = useRouter();
	return (
		<div className="container my-20 space-y-14">
			<div>
				<p className="my-5 text-2xl font-bold lg:text-4xl text-green-darker">
					{homeContent?.aboutMainTitle}
				</p>
				<p className="my-5 lg:w-3/5 lg:text-2xl text-green-darker">
					{homeContent?.aboutMainText}
				</p>
			</div>

			<div className="flex flex-col gap-6 sm:flex-row">
				{/* SAHSEH NUTRITION */}
				<div
					onClick={() => router.push('/sahseh-nutrition')}
					className="sm:basis-1/3 group cursor-pointer flex h-40 lg:h-[284px] rounded-xl bg-green-dark hover:bg-[#02A98C] transition duration-700 px-10 py-5"
				>
					<div className="flex flex-col justify-between basis-1/2">
						{mediaFiles?.logo && (
							<Image
								src={`http:${mediaFiles?.logo?.url}`}
								width={
									breakpoint === 'lg'
										? 80
										: breakpoint === 'xl'
										? 80
										: breakpoint === '2xl'
										? 80
										: 40
								}
								height={
									breakpoint === 'lg'
										? 80
										: breakpoint === 'xl'
										? 80
										: breakpoint === '2xl'
										? 80
										: 40
								}
								alt="sahseh logo"
							/>
						)}

						<p className="text-[#FFF4DA] font-medium text-base lg:text-[28px] capitalize">
							{homeContent?.aboutFirstCardTitle}
						</p>
						<div className="size-9 lg:size-14 rounded-full bg-gradient-to-b from-[#005B2F] to-[#1CAC77] flex items-center justify-center text-white">
							<MoveUpLeft size={30} className="ltr:flip_image" />
						</div>
					</div>
					<div className="flex items-center justify-end basis-1/2">
						{mediaFiles?.nutritionIcon && (
							<Image
								src={`http:${mediaFiles?.nutritionIcon?.url}`}
								width={
									breakpoint === 'lg'
										? 217
										: breakpoint === 'xl'
										? 217
										: breakpoint === '2xl'
										? 217
										: 135
								}
								height={
									breakpoint === 'lg'
										? 208
										: breakpoint === 'xl'
										? 208
										: breakpoint === '2xl'
										? 208
										: 40
								}
								className="ltr:flip_image"
								alt="sahseh nutrition"
							/>
						)}
					</div>
				</div>

				{/* SAHSEH CARE */}
				<div
					onClick={() => router.push('/sahseh-care')}
					className="sm:basis-1/3 group flex h-40 lg:h-[284px] cursor-pointer rounded-xl bg-blue-primary hover:bg-[#32B5E6] transition duration-700 px-10 py-5"
				>
					<div className="flex flex-col justify-between basis-1/2">
						{mediaFiles?.careLogo && (
							<Image
								src={`http:${mediaFiles?.careLogo?.url}`}
								width={
									breakpoint === 'lg'
										? 80
										: breakpoint === 'xl'
										? 80
										: breakpoint === '2xl'
										? 80
										: 40
								}
								height={
									breakpoint === 'lg'
										? 80
										: breakpoint === 'xl'
										? 80
										: breakpoint === '2xl'
										? 80
										: 40
								}
								alt="sahseh logo"
							/>
						)}

						<p className="text-[#FFF4DA] font-medium text-base lg:text-[28px] capitalize">
							{homeContent?.aboutSecondCardTitle}
						</p>
						<div className="size-9 lg:size-14 rounded-full cursor-pointer bg-gradient-to-b from-[#C3BABA] to-[#FFFFFF] flex items-center justify-center">
							<MoveUpLeft size={30} className="ltr:flip_image" />
						</div>
					</div>
					<div className="flex items-center justify-end basis-1/2">
						{mediaFiles?.careIcon && (
							<Image
								src={`http:${mediaFiles?.careIcon?.url}`}
								width={
									breakpoint === 'lg'
										? 170
										: breakpoint === 'xl'
										? 170
										: breakpoint === '2xl'
										? 170
										: 95
								}
								height={
									breakpoint === 'lg'
										? 300
										: breakpoint === 'xl'
										? 300
										: breakpoint === '2xl'
										? 300
										: 151
								}
								className="ltr:flip_image"
								alt="sahseh care"
							/>
						)}
					</div>
				</div>

				{/* SAHSEH COUPON */}
				<div className="sm:basis-1/3 group flex h-40 lg:h-[284px] cursor-pointer rounded-xl hover:bg-orange-primary bg-[#A23C1D] transition duration-700 px-10 py-5">
					<div className="flex flex-col justify-between basis-1/2">
						{mediaFiles?.couponLogo && (
							<Image
								src={`http:${mediaFiles?.couponLogo?.url}`}
								width={
									breakpoint === 'lg'
										? 80
										: breakpoint === 'xl'
										? 80
										: breakpoint === '2xl'
										? 80
										: 40
								}
								height={
									breakpoint === 'lg'
										? 80
										: breakpoint === 'xl'
										? 80
										: breakpoint === '2xl'
										? 80
										: 40
								}
								alt="sahseh couponLogo"
							/>
						)}

						<p className="text-[#FFF4DA] font-medium text-base lg:text-[28px] capitalize">
							{homeContent?.aboutThirdCardTitle}
						</p>
						<div className="flex items-center justify-center rounded-full size-9 capitalize lg:size-14 text-white font-medium text-base lg:text-[28px]">
							{homeContent?.soon}
						</div>
					</div>
					<div className="flex items-center justify-end basis-1/2">
						{mediaFiles?.couponIcon && (
							<Image
								src={`http:${mediaFiles?.couponIcon?.url}`}
								width={
									breakpoint === 'lg'
										? 170
										: breakpoint === 'xl'
										? 170
										: breakpoint === '2xl'
										? 170
										: 95
								}
								height={
									breakpoint === 'lg'
										? 300
										: breakpoint === 'xl'
										? 300
										: breakpoint === '2xl'
										? 300
										: 151
								}
								className="ltr:flip_image"
								alt="sahseh nutrition"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
