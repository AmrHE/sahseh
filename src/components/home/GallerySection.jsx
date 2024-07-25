import React from 'react';
import ImagesSlider from './ImagesSlider';
import VideoSection from './VideoSection';

const GallerySection = ({ homeContent }) => {
	return (
		<div className="">
			<div className="container flex flex-col items-center border-black border-solid lg:border-t text-green-darker">
				<p className="text-xl font-bold text-center bg-white px-14 lg:px-0 lg:text-3xl lg:-translate-y-2/3">
					{homeContent.galleryTitle}
				</p>
				<p className="text-base lg:text-2xl">{homeContent.gallerySubtitle}</p>
			</div>
			{/* IMAGES SLIDER */}
			<div className="container">
				<ImagesSlider />
			</div>
			{/* VIDEOS */}
			<VideoSection />
		</div>
	);
};

export default GallerySection;
