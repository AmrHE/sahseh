import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { useContentContext } from '../../context/ContentContext';
import outbox from '../../../public/ob-logo.webp';

import facebook from '../../../public/facebook.png';
import twitter from '../../../public/twitter.png';
import instagram from '../../../public/instagram.png';
import linkedIn from '../../../public/linkedin.png';

const Footer = () => {
	const { mediaFiles, footer } = useContentContext();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div className="bg-[#1A3129] lg:py-24 p-5">
			<div className="container flex flex-col items-center justify-between lg:flex-row">
				{/* DESKTOP LOGO */}
				<div className="flex items-center justify-center lg:justify-start">
					<Link href="/">
						<div className="block">
							{mediaFiles.whiteLogo && (
								<Image
									src={`http:${mediaFiles?.whiteLogo?.url}`}
									width={100}
									height={100}
									alt="sahseh logo"
								/>
							)}
						</div>
					</Link>
				</div>

				{/* ITEMS */}
				<div className="flex flex-col gap-10 py-20 text-lg font-bold text-center text-white lg:flex-row lg:py-0">
					<Link href="/">
						<p className="cursor-pointer">{footer?.home}</p>
					</Link>
					<Link href="/about-us">
						<p className="cursor-pointer">{footer?.about}</p>
					</Link>
					<Link href="/sahseh-nutrition">
						<p className="cursor-pointer">{footer?.nutrition}</p>
					</Link>
					<Link href="/sahseh-care">
						<p className="cursor-pointer">{footer?.care}</p>
					</Link>
					<Link href="/register-now">
						<p className="cursor-pointer">{footer?.register}</p>
					</Link>
				</div>

				{/* BACK TO TOP */}
				<div className="flex items-start justify-center lg:justify-end">
					<div
						className="flex items-center gap-5 cursor-pointer"
						onClick={scrollToTop}
					>
						<p className="text-lg font-semibold text-white capitalize">
							{footer?.backToTop}
						</p>
						<div className="size-16 bg-[#234338] rounded-full flex items-center justify-center">
							<ArrowUp size={34} color="#ffffff" />
						</div>
					</div>
				</div>
			</div>

			{/* LOGOS + SOCIAL MEDIA ICONS */}
			<div className="container flex flex-col items-center justify-between my-16 gap-y-10 lg:flex-row">
				{/* SOCIAL MEDIA ICONS */}
				<div className="flex gap-4">
					<Link href="" className="cursor-pointer">
						<Image src={facebook} width={40} height={40} alt="facebook" />
					</Link>
					<Link href="https://x.com/Sahsehksa" className="cursor-pointer">
						<Image src={twitter} width={40} height={40} alt="twitter" />
					</Link>
					<Link href="" className="cursor-pointer">
						<Image src={instagram} width={40} height={40} alt="instagram" />
					</Link>
					<Link href="" className="cursor-pointer">
						<Image src={linkedIn} width={40} height={40} alt="linkedIn" />
					</Link>
				</div>

				<p className="text-sm text-center text-white lg:text-lg">
					{footer?.footerText}
				</p>

				{/* FAMILY LOGOS */}
				<div className="flex gap-4">
					{mediaFiles.logo && (
						<Image
							src={`http:${mediaFiles?.logo?.url}`}
							width={60}
							height={60}
							alt="sahseh logo"
						/>
					)}
					{mediaFiles.careLogo && (
						<Image
							src={`http:${mediaFiles?.careLogo?.url}`}
							width={60}
							height={60}
							alt="sahseh logo"
						/>
					)}
					{mediaFiles.couponLogo && (
						<Image
							src={`http:${mediaFiles?.couponLogo?.url}`}
							width={60}
							height={60}
							alt="sahseh couponLogo"
						/>
					)}
				</div>
			</div>

			{/* CONTACTS + COPYRIGHTS */}
			<div className="container lg:bg-[#234338] lg:divide-y-0 divide-y divide-white lg:border border-solid flex flex-col lg:flex-row lg:items-center items-start justify-between lg:p-5 border-[#2C5446] rounded-lg">
				{/* CONTACTS */}
				<div className="flex flex-col items-start w-full lg:w-auto lg:gap-5 lg:items-center lg:flex-row">
					<div className="flex items-center font-medium lg:text-lg text-white leading-[150%] gap-2 border-solid lg:border border-[#2C5446] p-3 rounded-lg">
						<Mail fill="#CBEA7B" color="#234338" size={36} />
						<p>a.ghandour@outboxsa.com</p>
					</div>
					<div className="flex items-center font-medium lg:text-lg text-white leading-[150%] gap-2 border-solid lg:border border-[#2C5446] p-3 rounded-lg">
						<Phone fill="#CBEA7B" color="#234338" size={36} />
						<p>+966509380330</p>
					</div>
					<div className="flex items-center font-medium lg:text-lg text-white leading-[150%] gap-2 border-solid lg:border border-[#2C5446] p-3 rounded-lg">
						<MapPin fill="#CBEA7B" color="#234338" size={36} />
						<p>Saudi Arabia - المملكة السعودية</p>
					</div>
				</div>

				{/* COPYRIGHTS */}
				<div className="leading-[150%] flex gap-4 items-center mt-6 pt-6 lg:pt-0 lg:mt-0 text-[#F2F2F2] text-xs lg:text-lg w-full lg:w-auto">
					<p className="capitalize">{footer?.copyrights}</p>
					<Image src={outbox} width={50} height={50} alt="outbox" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
