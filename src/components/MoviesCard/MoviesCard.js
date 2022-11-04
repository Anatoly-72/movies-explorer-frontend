import './MoviesCard.css';
import movie from '../../images/design.jpg';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const { pathname } = useLocation();
  return (
    <div className='card'>
      <img className='card__poster-movie' src={movie} alt='Постер фильма' />
      <div className='card__description-movie'>
        <span className='card__name-movie'>33 слова о дизайне</span>
        <span className='card__duration-movie'>1ч 47м</span>
      </div>
      <div className='card__buttons'>
        {pathname === '/saved-movies' ? (
          <button
            type='button'
            className='card__button card__button_delete'
          />
        ) : (
          <button
            type='button'
            className='card__button card__button_inactive'
          />
        )}
      </div>
    </div>
  );
}

export default MoviesCard;
