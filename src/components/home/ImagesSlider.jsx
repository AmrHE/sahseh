import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useContentContext } from '../../context/ContentContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useBreakpoint from '../../hooks/useBreakpoints';
function MultipleItems() {
	const { mediaFiles } = useContentContext();
	const sliderRef = useRef(null);
	const breakpoint = useBreakpoint();

	const SamplePrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div onClick={onClick} className={`arrow ${className}`}>
				<ChevronLeft
					className="arrows rtl:flip_image"
					style={{ color: 'black' }}
				/>
			</div>
		);
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div onClick={onClick} className={`arrow ${className}`}>
				<ChevronRight
					className="arrows rtl:flip_image"
					style={{ color: 'black' }}
				/>
			</div>
		);
	}

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow:
			breakpoint === 'lg'
				? 4
				: breakpoint === 'xl'
				? 4
				: breakpoint === '2xl'
				? 4
				: 2,
		slidesToScroll: 1,
		speed: 1000,
		autoplaySpeed: 1000,
		pauseOnHover: true,
		pauseOnFocus: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className="mt-20 mb-8">
			<Slider ref={sliderRef} {...settings}>
				{mediaFiles?.sliderImages &&
					mediaFiles?.sliderImages.map((item, i) => (
						<div key={i} className="px-2 outline-none lg:px-5">
							<Image
								className="rounded-xl ltr:flip_image"
								src={`http:${item.fields.file['en-US'].url}`}
								alt=""
								width={387}
								height={418}
							/>
						</div>
					))}
				{mediaFiles?.sliderImages &&
					mediaFiles?.sliderImages.map((item, i) => (
						<div key={i} className="px-2 outline-none lg:px-5">
							<Image
								className="rounded-xl ltr:flip_image"
								src={`http:${item.fields.file['en-US'].url}`}
								alt=""
								width={387}
								height={418}
							/>
						</div>
					))}
				{mediaFiles?.sliderImages &&
					mediaFiles?.sliderImages.map((item, i) => (
						<div key={i} className="px-2 outline-none lg:px-5">
							<Image
								className="rounded-xl ltr:flip_image"
								src={`http:${item.fields.file['en-US'].url}`}
								alt=""
								width={387}
								height={418}
							/>
						</div>
					))}
			</Slider>
		</div>
	);
}

export default MultipleItems;
