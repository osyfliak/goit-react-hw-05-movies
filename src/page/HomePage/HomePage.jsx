import { useEffect, useState } from 'react';
import { getMovieTrending } from 'services/movieAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Link, useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieTrending();
        if (data.results.length) {
          setMovie(data.results);
        }
      } catch (error) {
        console.log(error);
        Notify.failed('No films');
      }
    };
    fetchMovie();
  }, []);

  return (
    <ul>
      {movie.map(item => (
        <li key={item.id}>
          <Link state={{ from: location }} to={`/movies/${item.id}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
