import axios from 'axios';

const movieSetvice = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/550',
  params: {
    api_key: '4bf39acf6ebeb7cbbfc54c4c8bc42fdc',
  },
});

export const popularMovie = async params => {
  const { data } = await movieSetvice.get('', { params });
  return data;
};
