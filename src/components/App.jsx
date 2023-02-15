import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('page/HomePage'));
const Movie = lazy(() => import('page/Movie'));
const MovieDetals = lazy(() => import('page/MovieDetals'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));
const Header = lazy(() => import('../components/Header'));

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
