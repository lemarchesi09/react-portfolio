import Logo from "../Logo/Logo";
import MenuIcon from "../MenuIcon/MenuIcon";
import "./navBar.css";


function NavBar() {
    return (
        <nav className="flex justify-between px-5 bg-black h-20 w-full items-center " >

            <Logo/>
            <MenuIcon/>

        </nav>
    );
}

export default NavBar;