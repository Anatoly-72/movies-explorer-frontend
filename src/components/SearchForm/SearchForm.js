import './SearchForm.css';
import icon from '../../images/loop-icon.svg';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__box'>
          <input
            className='search__input'
            id='movie'
            name='movie'
            type='text'
            placeholder='Фильм'
            required
          />
          <button className='search__button' type='submit'>
            <img className='search__icon' src={icon} alt='Поиск' />
          </button>
        </div>
        <Checkbox />
      </form>
    </section>
  );
}

export default SearchForm;
