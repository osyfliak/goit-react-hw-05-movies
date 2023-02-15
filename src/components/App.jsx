import { HomePage } from 'page/HomePage/HomePage';
import { Movie } from 'page/Movie/Movie';
import { MovieDetals } from 'page/MovieDetals/MovieDetals';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Header } from './Header/Header';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetals />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
