import { useState, useEffect } from 'react';

export interface UseScreenDimensionsI {
    width: number | null
    height: number | null
}

export const useScreenDimensions = () => {
	const [windowSize, setWindowSize] = useState<UseScreenDimensionsI>({
		width: null,
		height: null,
	});

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		function handleResize() {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}, 300);
		}

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(timeoutId);
		};
	}, []);

	return windowSize;
};

export default useScreenDimensions;