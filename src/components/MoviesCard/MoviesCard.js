import './MoviesCard.css';
import movie from '../../images/design.jpg'

function MoviesCard() {
   return (
      <div className='card'>
         <img className='card__poster-movie' src={movie} alt='Постер фильма' />
         <div className='card__description-movie'>
            <span className='card__name-movie'>33 слова о дизайне</span>
            <span className='card__duration-movie'>1ч 47м</span>
         </div>
         <button className='card__button' type='button' />
         <button className='card__button_saved' type='button' />
         <button className='card__button_delete' type='button' />
      </div>
   )
}

export default MoviesCard;