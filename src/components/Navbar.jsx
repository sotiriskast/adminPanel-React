import React, {useEffect} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";

import {RiNotification3Line} from "react-icons/ri";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from ".";
import {useStateContent} from "../contexts/ContextProvider";
import {MdKeyboardArrowDown} from "react-icons/md";

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position={"BottomCenter"}>
        <button type={"button"} onClick={customFunc} style={{color}}
                className={"relative text-xl rounded-full p-3 hover:bg-light-gray"}>
            <span className={"absolute inline-flex rounded-full h-2 w-2 right-2 top-2"}/>{icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    const {

        setActiveMenu,
        isClicked,
        screeSize,
        setScreeSize,

        handleClick,
        currentColor
    } = useStateContent()
    useEffect(() => {
        const handleResize = () => setScreeSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    useEffect(() => {
        return () => {
            if (screeSize <= 900) {
                setActiveMenu(false)
            } else {
                setActiveMenu(true)
            }
        };
    }, [screeSize]);

    return (
        <div className={"flex justify-between p-2 md:mx-6 relative"}>
            <NavButton title={"Menu"} customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                       color={currentColor} icon={<AiOutlineMenu/>}/>

            <div className={"flex"}>
                <NavButton title={"Cart"}
                           customFunc={() => handleClick('cart')}
                           color={currentColor}
                           icon={<FiShoppingCart/>}/>
                <NavButton title={"Notification"}
                           customFunc={() => handleClick('notification')}
                           color={currentColor}
                           icon={<RiNotification3Line/>}/>
                <TooltipComponent
                    content={"Profile"}
                    position={"BottomCenter"}
                >
                    <div className={"flex  items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"}
                         onClick={() => handleClick('userProfile')}>
                        <img src={avatar} className={"rounded-full w-8 h-8"} alt=""/>

                        <p>
                            <span className={"text-gray-400 text-14"}>Hi </span>{' '}<span
                            className={"text-gray-400 font-bold ml-1 text-14"}> Sotiris</span>
                        </p>
                        <MdKeyboardArrowDown className={"text-gray-400 text-14"}/>

                    </div>

                </TooltipComponent>
                {isClicked.cart && <Cart/>}
                {isClicked.chart && <Chat/>}
                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
            </div>
        </div>
    )
}

export default Navbar