import {useRef} from 'react';

export const useScroll = () => {
    const elementsRef = useRef([]);

    const scrollToHandler = scrollDestination => {
        let destination;
        var destinationOffset = 128;

        if (scrollDestination === "home") {
            destination = elementsRef.current[0];
        } else if (scrollDestination === "services") {
            destination = elementsRef.current[1];
        } else if (scrollDestination === "projects") {
            destination = elementsRef.current[2];
            destinationOffset = 48;
        } else if (scrollDestination === "testimonials") {
            destination = elementsRef.current[3];
        } else if (scrollDestination === "contact") {
            destination = elementsRef.current[4];
            destinationOffset = 48;
        }

        window.scrollTo({
            top: destination.offsetTop - destinationOffset,
            behavior: "smooth"
        });
    };

    return {elementsRef, scrollToHandler};
};