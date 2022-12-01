import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PopupNavigation from '../PopupNavigation/PopupNavigation';

function Navigation({ loggedIn }) {
  const [isPopupNavigation, setIsPopupNavigation] = useState(false);


  function closePopup() {
    setIsPopupNavigation(false);
  }

  function openPopup() {
    setIsPopupNavigation(true);
  }

  return (
    <>
      {loggedIn ? (
        <>
          <nav className='navigation navigation_type_registered'>
            <NavLink
              to='/movies'
              className='navigation__link navigation__link_registered'
              activeClassName='navigation__link_active'
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className='navigation__link navigation__link_registered'
              activeClassName='navigation__link_active'
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <nav className='navigation navigation_type_account'>
            <Link
              to='/profile'
              className='navigation__link navigation__link_account'
            >
              Аккаунт
            </Link>
          </nav>
          <button
            className='navigation__btn'
            type='button'
            onClick={openPopup}
          >
            <div className='navigation__hamburger'></div>
          </button>
        </>
      ) : (
        <nav className='navigation'>
          <Link to='/signup' className='navigation__link'>
            Регистрация
          </Link>
          <Link to='/signin'>
            <button className='navigation__button' type='button'>
              Войти
            </button>
          </Link>
        </nav>
      )}
      <PopupNavigation isOpen={isPopupNavigation} onClose={closePopup} />
    </>
  );
}

export default Navigation;
