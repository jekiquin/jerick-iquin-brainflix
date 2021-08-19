import './Header.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import logo from '../../assets/Images/Logo/Logo-brainflix.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt='website logo' />
                <HeaderNav />
            </div>
        </header>
    )
}

export default Header;