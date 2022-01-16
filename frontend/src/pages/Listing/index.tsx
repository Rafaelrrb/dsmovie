import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing(){

  const [pageNumber, setPageNumber] = useState(0);

  const [page,setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  });

  useEffect(()=>{
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
         .then( response => {
            const data = response.data as MoviePage;
            setPage(data);
          });
  },[pageNumber]);

  const handlePageChange = (newPageNumber : number) =>{
    setPageNumber(newPageNumber);
  }

  return(
    <>
      <Pagination page={page} onChange={handlePageChange}/>
      <div className="container">
        <div className="row">
          {page.content.map(movie =>
             (
                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  {/* col-sm-6 define padroes de tamanho e o quanto ocupar, sm e um tamanho de tela assim como o lg/xl e o 6,4 e 3 define quanto ele vai ocupar sendo o maximo 12 */}
                  <MovieCard movie={movie}/>
                </div>
             )
          )}
          
        </div>
      </div>
    </>
  );
}

export default Listing;