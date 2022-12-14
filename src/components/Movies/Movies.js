import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList isMovies={true} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
