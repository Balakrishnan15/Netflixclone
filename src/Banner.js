import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner(){
    const[movies,setmovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            console.log(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
            setmovies(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length -1)
                ]
            );
            // Math.floor(Math.rondom() * request.data.results.length -1)
            return request;
        }
        fetchData();
    },[])
    console.log(movies);

    function truncate(str,n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return(
        <header className='banner' style={{
            backgroundSize:"cover", backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition:"center"
        
        }}>
            <div className='banner__contents'>

                <h1 className='banner__title'>
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>

                <div className="banner_buttons">
                  <buuton className="banner_button"> Play</buuton>
                  <buuton className="banner_button">My List</buuton>
                </div>

                  <h1 className="banner_description">{truncate(movies?.overview, 150)}</h1>
            </div>
       <div className="banner--fadeBottom"/>
        </header>
    )
}
export default Banner;
