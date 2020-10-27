import { useEffect } from 'react'

export const useGoodsPage = (setIsScrolled) => {
	const handleScroll = () => {
		if(window.scrollY > 300) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
}
