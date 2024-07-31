import React from 'react';
import heroImg from '../../../public/about-banner.png';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<div className="">
			<Image src={heroImg} alt="hero image" />
		</div>
	);
};

export default HeroSection;
