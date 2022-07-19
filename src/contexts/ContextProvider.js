import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}
export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClick = (clicked) => {
        setIsClicked({...clicked, [clicked]: true})
    }
    const [screeSize, setScreeSize] = useState(undefined);
    return (
        <StateContext.Provider
            value={{activeMenu, setActiveMenu,screeSize, setScreeSize, isClicked, setIsClicked,handleClick,}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContent = () => useContext(StateContext);