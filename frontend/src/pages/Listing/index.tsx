import axios from "axios";

import{useState, useEffect} from "react";
import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import {BASE_URL} from "utils/request";
import {MoviePage} from "types/movie";


function Listing() {

const [pageNumber, setpageNumber] = useState(0);

useEffect(()=>{
    axios.get(`${BASE_URL}/movies?size=&page=1`)
    .then(response => {
        const data = response.data as MoviePage;
        console.log(data);
        setpageNumber(data.number);     
    });
},[]);
    
    
   
    return (
        < >
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    
                               
                                      
                </div>
            </div>
    </>
    );
}
export default Listing;