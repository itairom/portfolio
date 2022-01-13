import { useEffect, useState } from 'react';

const useScrollDirection = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolling(prevState=>!prevState)
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    return isScrolling;
};

export default useScrollDirection;

export const usePageHeight = () => {
    const initialHeight = window.innerHeight
    const [pageHeight, setIsPageHeight] = useState(initialHeight);

    useEffect(() => {
        const onResize = () => {
            const innerHeight = window.innerHeight
            setIsPageHeight(innerHeight)
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [pageHeight])
    return pageHeight;
}

