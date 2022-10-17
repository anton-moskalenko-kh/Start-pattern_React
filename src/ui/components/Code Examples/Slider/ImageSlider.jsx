//Core
import {useState} from "react";

//Style
import {useStyle} from "./style";


function ImageSlider(props) {
    const {slides} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const classes = useStyle()

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext= () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className={classes.slidesWrapper}>
            <div onClick={goToPrevious} className={classes.leftArrow}>❰</div>
            <div onClick={goToNext} className={classes.rightArrow}>❱</div>
            <div className={classes.slide} >
                <img className={classes.image} src={slides[currentIndex]} alt="Rocket"/>
            </div>
        </div>
    )
}

export default ImageSlider