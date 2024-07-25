// import { Environment, OrbitControls } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import React from 'react';
// import { Box } from './Box';

// const BoxCanvas = () => {
// 	return (
// 		<div className="w-[40vw] h-[50vh]">
// 			<Canvas
// 				frameloop="demand"
// 				shadows
// 				camera={{ position: [5, 3, 5], fov: 25 }}
// 				gl={{ preserveDrawingBuffer: true }}
// 			>
// 				<Environment preset="warehouse" />
// 				<OrbitControls
// 					autoRotate
// 					enableZoom={false}
// 					maxPolarAngle={Math.PI / 2}
// 					minPolarAngle={Math.PI / 2}
// 				/>
// 				<Box />
// 			</Canvas>
// 		</div>
// 	);
// };

// export default BoxCanvas;

'use client';
import React, { useEffect, useState } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Box } from './Box';

const BoxCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add a listener to screen size change
		const mediaQuery = window.matchMedia('(max-width:1024px)');
		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);
		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};
		// Add the callback functino as a listener for changes to the media query
		mediaQuery.addEventListener('change', handleMediaQueryChange);
		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	return (
		<div className="w-[100vw] lg:w-[40vw] h-[50vh]">
			<Canvas
				frameloop="demand"
				shadows
				camera={{ position: [5, 3, 5], fov: 25 }}
				gl={{ preserveDrawingBuffer: true }}
			>
				<Environment preset="warehouse" />
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Box isMobile={isMobile} />
			</Canvas>
		</div>
	);
};

export default BoxCanvas;
