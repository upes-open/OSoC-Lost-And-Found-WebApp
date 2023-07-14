import React, { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import "./goToTop.css";

const GoToTop = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > 250) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])

    return (
        <>
            {isVisible && <div className="top-btn" onClick={goToBtn}>
                <FaArrowUp className='top-btn-icon' />
            </div>}
        </>
    );

};




export default GoToTop
