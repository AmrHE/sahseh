import { useState, useEffect } from 'react';

const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState('xs');

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width >= 1536) {
				setBreakpoint('2xl');
			} else if (width >= 1280) {
				setBreakpoint('xl');
			} else if (width >= 1024) {
				setBreakpoint('lg');
			} else if (width >= 768) {
				setBreakpoint('md');
			} else if (width >= 640) {
				setBreakpoint('sm');
			} else {
				setBreakpoint('xs');
			}
		};

		handleResize(); // Set the initial breakpoint
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return breakpoint;
};

export default useBreakpoint;
