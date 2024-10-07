import { useState, useEffect } from 'react';
import Logo from '../assets/sun.png'
export const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

    useEffect(() => {
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    return (
        <header>
            <div className='logo'>
                <img src={Logo} alt='Melania logo'></img>
                <spna>My tasks</spna>
            </div>
            <div className='themeSelector'>
                <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("g1")} className={theme === "g1" ? "g1 activeTheme" : "g1"}></span>
                <span onClick={() => setTheme("g2")} className={theme === "g2" ? "g2 activeTheme" : "g2"}></span>
                <span onClick={() => setTheme("g3")} className={theme === "g3" ? "g3 activeTheme" : "g3"}></span>
            </div>
        </header>
    )
}
