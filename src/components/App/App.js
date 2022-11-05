import './App.css';
import { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  serverError,
  registerUserSuccessful,
  registerUserError,
  authError,
} from '../../utils/constans';
import MainApi from '../../utils/MainApi';
import Token from '../../utils/token';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';

function App() {
  //* Переменные состояния пользователя
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    getUserInfo();
  }, []);

  function getUserInfo() {
    MainApi.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(serverError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onRegister(formData) {
    MainApi.registerUser(formData)
      .then((res) => {
        if (res._id) {
          setPopupTitle(registerUserSuccessful);
          setIsOpenPopup(true);
          onLogin(formData);
        }
      })
      .catch((err) => {
        setPopupTitle(registerUserError);
        setIsOpenPopup(true);
      });
  }

  function onLogin(formData) {
    MainApi.loginUser(formData)
      .then(({ token }) => {
        if (token) {
          Token.saveToken(token);
          MainApi.updateToken();
          setLoggedIn(true);
          getUserInfo();
          history.push('/movies');
        }
      })
      .catch((err) => {
        setPopupTitle(authError);
        setIsOpenPopup(true);
      });
  }

  function openPopup(textError) {
    setPopupTitle(textError);
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
    setPopupTitle('');
  }

  useEffect(() => {
    if (setIsOpenPopup) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closePopup();
        }
      }

      document.addEventListener('keydown', handleEsc);
      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isOpenPopup]);

  function onSignOut() {
    Token.removeToken();
    setLoggedIn(false);
    localStorage.removeItem('films');
    localStorage.removeItem('filmsTumbler');
    localStorage.removeItem('filmsInputSearch');
    localStorage.removeItem('savedFilms');
    localStorage.removeItem('savedFilmsTumbler');
    localStorage.removeItem('savedFilmsInputSearch');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        {/* {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
          <Header loggedIn={loggedIn} isLoading={isLoading} /> : ''} */}
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies loggedIn={loggedIn} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies loggedIn={loggedIn} />
          </Route>
          <Route path='/profile'>
            <Profile loggedIn={loggedIn} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
