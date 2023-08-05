import React, { useEffect, useState, useRef } from 'react';
import '../../style/header.scss'
import { useTheme } from '../../hooks/use-thems';
import { AiOutlineDown } from 'react-icons/ai'

const ChangeColor = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {them, setTheme} = useTheme()
    const [imgColor, setImgColor] = useState('')
    const [imgColorMain, setImgColorMain] = useState('')
    const [locStoreColor, setLocStoreColo] = useState('')
    const changeColorRef = useRef(null);

    useEffect (() => {
        try{
            if (window?.localStorage.getItem('app-them') === 'violet-dark_gray'){

                setImgColor("./color/violet-dark.webp")
            } else if (window?.localStorage.getItem('app-them') === 'yelow-white'){ 
                setImgColor("./color/yelow.webp")   

            } else if (window?.localStorage.getItem('app-them') === 'violet-white') {
                setImgColor("./color/violet-white.webp")   

            } else if (window?.localStorage.getItem('app-them') === 'dark_grey_pink'){
                setImgColor("./color/ping.webp")  

            }
        } catch (error) {
            console.log(error)
        }
    }, [imgColorMain])



    const hendlerChangeColorVioletDark = ( ) =>{
        try {
            setTheme('violet-dark_gray')
            setImgColorMain("./color/violet-dark.webp")
            setIsOpen(!isOpen)
            
        } catch (error) {
            console.log(error)
        }
    }
    const hendlerChangeColorYelow = ( ) =>{
        try {
            setTheme('yelow-white')
            setImgColorMain("./color/yelow.webp")
            setIsOpen(!isOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const hendlerChangeColorvioletWhite = ( ) =>{
        try {
            setTheme('violet-white')
            setImgColorMain("./color/violet-white.webp")
            setIsOpen(!isOpen)
        } catch (error) {
            console.log(error)
        }
    }
    const hendlerChangeColorPinkDark = ( ) =>{
        try {
            setTheme('dark_grey_pink')
            setImgColorMain("./color/ping.webp")
            setIsOpen(!isOpen)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        try{
            const handleOutsideClick = (event) => {
                if (changeColorRef.current && !changeColorRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handleOutsideClick);
    

            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            };
        } catch (error) {
            console.log(error)
        }
    }, []);


    return (
        <div 
        ref={changeColorRef}
        className='change_color_wrapper'>
            <div className='change_color_wrapper_main-item '
            onClick={() => setIsOpen(!isOpen)}>
                <div className='color border-1px'>
                <img src={imgColor} alt="" />
                </div>
                <AiOutlineDown
                style={{rotate: `${isOpen ? '180deg' : '0deg'}`}}
                className='icon arrow-down'/>
            </div>
            {isOpen && 
                <div className='change_color_wrapper_item'>
                    <div onClick={hendlerChangeColorYelow} className='color border-1px '>
                        <img src="./color/yelow.webp" alt="" />
                    </div>
                    <div onClick={hendlerChangeColorvioletWhite} className='color border-1px'>
                    <img src="./color/violet-white.webp" alt="" />
                    </div>
                    <div onClick={hendlerChangeColorPinkDark} className='color border-1px'>
                    <img src="./color/ping.webp" alt="" />
                    </div>
                    <div onClick={hendlerChangeColorVioletDark} className='color border-1px'>
                    <img src="./color/violet-dark.webp" alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default ChangeColor;