import Logo from '../assets/sun.png'
export const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={Logo} alt='Melania logo'></img>
                <spna>My tasks</spna>
            </div>
            <div className='themeSelector'>
                <span className='light'></span>
                <span className='medium'></span>
                <span className='dark'></span>
                <span className='g1'></span>
                <span className='g2'></span>
                <span className='g3'></span>
            </div>
        </header>
    )
}
