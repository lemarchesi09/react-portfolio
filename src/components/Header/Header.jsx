import "./header.css"
import imgHero from "../../assets/img-hero.png";

function Header() {
    return (
        <header >
            <h1 > <span className='header__h1--span'>Welcome</span>  to my portfolio</h1>
            <div className="header__heroCont">
                <img src={imgHero} alt=""/>
                <p >I´m <span className='header__p--span'>Enzo Marchesi</span> , a <span className='header__p--span2'>Front End Developer</span>  based in Córdoba, ARG</p>
            </div>
        </header>
    );
}

export default Header;