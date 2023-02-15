import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';
import PropTypes from 'prop-types';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
        Notify.failed('No detals');
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
           <div class="row">
  <div class="col-4">
    <div id="list-example" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-4">Author: {review.author}</a>
    </div>
  </div>
  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="list-item-1">Author: {review.author}</h4>
      <p>{review.content}</p>
    
    </div>
  </div>
</div>
          </li>
        ))}
      </ul>
    </>
  );
};


