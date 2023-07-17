import { useLayoutEffect, useState } from "react"

const isDarkTheme = window?.matchMedia('(prefers-color-scheme:dark)').matches
const defaultTheme = isDarkTheme ? 'dark_grey_pink' : 'yelow-white'


export const useTheme = () =>{
    const [theme, setTheme] = useState(localStorage.getItem('app-them') || defaultTheme)

    useLayoutEffect(() =>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-them', theme)
    }, [theme])
    return {theme, setTheme}
}