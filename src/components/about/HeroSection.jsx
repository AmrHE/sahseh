import React from 'react';
import heroImg from '../../../public/about-banner.png';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<div className="pt-24 lg:pt-32">
			<Image src={heroImg} />
		</div>
	);
};

export default HeroSection;
