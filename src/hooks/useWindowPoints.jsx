import { useState, useEffect } from 'react';

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowWidth;
};

export default useWindowWidth;
