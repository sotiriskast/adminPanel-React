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
    const [screeSize, setScreeSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03c9d7');
    const [currentMode, setCurrentMode] = useState('light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false)
    }
    const setColor = (mode) => {
        setCurrentColor(mode);
        localStorage.setItem('colorMode',mode);
        setThemeSettings(false)
    }


    const handleClick = (clicked) => {
        setIsClicked({...clicked, [clicked]: true})
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                screeSize, setScreeSize,
                isClicked, setIsClicked,
                handleClick,
                currentColor, currentMode,
                setCurrentColor, setCurrentMode,
                themeSettings, setThemeSettings,
                setMode, setColor


            }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContent = () => useContext(StateContext);