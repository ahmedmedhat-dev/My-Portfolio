import { useEffect, useState } from "react";

export function useSectionAnimation(ref) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: "-20% 0px -20% 0px"
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [ref]);

    return animate;
}