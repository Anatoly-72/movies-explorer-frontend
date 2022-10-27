import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation({ loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <>
          <nav className="navigation navigation_type_registered">
            <NavLink
              to="/movies"
              className="navigation__link navigation__link_registered"
              activeClassName="navigation__link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="navigation__link navigation__link_registered"
              activeClassName="navigation__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <nav className="navigation navigation_type_account">
            <Link to="/profile" className="navigation__link navigation__link_account">
              Аккаунт
            </Link>
          </nav>
        </>
      ) : (
        <nav className="navigation">
          <Link to="/signup" className="navigation__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="navigation__button" type="button">
              Войти
            </button>
          </Link>
        </nav>
      )}
    </>
  );
  // return (
  //    <div className='navigation'>
  //       <Link to='/sign-up' className='navigation__link'>Регистрация</Link>
  //       <Link to='/signin'>
  //          <button className='navigation__button'>
  //             Войти
  //          </button>
  //       </Link>
  //    </div>
  // )
}

export default Navigation;
