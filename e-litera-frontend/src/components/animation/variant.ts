import { animate } from "framer-motion";

export const fadeInAnimationVariant = {
    initial: {
        opacity:0,
        y:100
    },
    animate: (index: number) => ({
        opacity:1,
        y:0,
        transition: {
            delay:0.05 * index
        }
    })
} 

export const fadeInReverseAnimationVariant = {
    initial: {
        opacity:0,
        y:-100
    },
    animate: (index: number) => ({
        opacity:1,
        y:0,
        transition: {
            delay:0.05 * index
        }
    })
} 



export const fadeInWidthAnimationVariant = {
    initial: {
        opacity:0,
        x:-100
    },
    animate: (index: number) => ({
        opacity:1,
        x:0,
        transition: {
            delay:0.4 * index
        }
    })
}


export const fandeInContactAnimationVariant = {
    initial: {
        opacity:0,
        y:100,
        x:-50
    },
    animate: (index: number) => ({
        opacity:1,
        y:0,
        x:0,
        transition: {
            delay:0.2 * index
        }
    })
}