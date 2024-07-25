import React from 'react';
import Image from 'next/image';
import goals from '../../../public/nutrition-goals.svg';
import goalsMob from '../../../public/nutrition-goals-mob.svg';
import checkmark from '../../../public/nutrition-checkmark.svg';
import eclipse from '../../../public/nutrition-eclipse.svg';

const GoalsSection = ({ nutritionContent, mediaFiles }) => {
	return (
		<div className="flex flex-col gap-10 mx-5 mt-24">
			<div className="relative flex items-center justify-center ">
				<Image src={goals} alt="goals" className="hidden lg:block" />
				<Image src={goalsMob} alt="goals mobile" className="block lg:hidden" />
				<Image src={eclipse} alt="eclipse" className="absolute" />
			</div>

			<div className="container">
				<p className="font-bold text-[22px] lg:text-[40px] leading-10 text-[#026C34] my-12">
					{nutritionContent.goalsTitle}
				</p>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal1}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal2}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal3}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal4}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal5}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal6}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal7}
						</p>
					</div>
					<div className="flex items-start col-span-1 mt-6 lg:items-center">
						<Image src={checkmark} alt="checkmark" />
						<p className="px-2 text-base lg:text-2xl leading-[205%]">
							{nutritionContent.goal8}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoalsSection;
