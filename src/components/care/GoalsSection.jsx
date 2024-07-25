import React from 'react';
import goalsBox from '../../../public/care-goals.svg';
import checkmark from '../../../public/checkmark.svg';
import Image from 'next/image';

const GoalsSection = ({ sahsehCareContent, mediaFiles }) => {
	return (
		<div className="flex flex-col gap-10 mx-5 mt-24 xl:flex-row lg:mt-52">
			<Image src={goalsBox} alt="goalsBox" />
			<div className="lg:mt-28">
				<p className="font-bold text-[22px] lg:text-[40px] leading-10 text-[#284BC9]">
					{sahsehCareContent.goalsTitle}
				</p>
				<div>
					<div className="flex items-start mt-6">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal1}
						</p>
					</div>
					<div className="flex items-start">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal2}
						</p>
					</div>
					<div className="flex items-start">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal3}
						</p>
					</div>
					<div className="flex items-start">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal4}
						</p>
					</div>
					<div className="flex items-start">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal5}
						</p>
					</div>
					<div className="flex items-start">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal6}
						</p>
					</div>
					<div className="flex items-start">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{sahsehCareContent.goal7}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoalsSection;
