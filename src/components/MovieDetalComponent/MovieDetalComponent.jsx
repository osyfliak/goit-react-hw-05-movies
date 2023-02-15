import { IMG_URL } from 'services/movieAPI';

export const MovieDetalComponent = ({ src, title, overview, genres }) => {

    const elements = genres.map(genre => (
        <li key={genre.id}><p className="card-text">{genre.name}</p></li> 
       ));
  return (
    <>
      <div className="card m-3 w-100 ">
        <div className="row">
          <div className="col-md-4">
            <img src={`${IMG_URL}${src}`} className="rounded rounded-start w-75" alt="1" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <h5 className="card-title">Overview:</h5>
              <p className="card-text"> {overview}</p>    
              <ul>{elements}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
