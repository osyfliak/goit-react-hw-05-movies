import { IMG_URL } from 'services/movieAPI';

export const MovieDetalComponent = ({ src, title, overview, genres }) => {

    // const elements = genres.map(genre => (
    //     <li ><p className="card-text">Genre: {genre.name}</p></li> 
    //    ));
  return (
    <>
      <div className="card m-3 w-50 ">
        <div className="row g-5 ">
          <div className="col-md-4">
            <img src={`${IMG_URL}${src}`} className="rounded rounded-start" alt="1" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <h5 className="card-title">Overview:</h5>
              <p className="card-text"> {overview}</p>
       
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
