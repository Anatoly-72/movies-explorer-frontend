import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function Movies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <Footer />
    </>
  );
}

export default Movies;
