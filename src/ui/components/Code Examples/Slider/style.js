import {createUseStyles} from "react-jss";

export const useStyle = createUseStyles({
    slidesWrapper: {
        maxWidth: '500px',
        height: '350px',
        position: 'relative'
    },
    slide: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        border: '1 px solid #fff',
        borderRadius: '10px'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    rightArrow: {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    },
    leftArrow: {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }
})