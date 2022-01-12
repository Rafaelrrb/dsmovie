import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing(){
  return(
    <>
      <Pagination/>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            {/* col-sm-6 define padroes de tamanho e o quanto ocupar, sm e um tamanho de tela assim como o lg/xl e o 6,4 e 3 define quanto ele vai ocupar sendo o maximo 12 */}
            <MovieCard/>
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard/>
          </div>
    
        </div>
      </div>
    </>
  );
}

export default Listing;