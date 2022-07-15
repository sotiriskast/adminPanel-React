import React, {useEffect} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from "react-icons/all";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import avatar from '../data/avatar.jpg';
import {cart, Chat, Notification, UserProfile} from ".";
import {useStateContent} from "../contexts/ContextProvider";

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position={"BottomCenter"}>
        <button>

        </button>
    </TooltipComponent>
)

const Navbar = () => {
    const {activeMenu, setActiveMenu} = useStateContent()
    return (
        <div className={"flex justify-betweenp-2 md:mx-6 relative"}>
            <NavButton title={"Menu"} customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color={'blue'} icon={<AiOutlineMenu/>} />
        </div>
    )
}

export default Navbar