import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
const Row = ({ fetchUrl, title, forSlider }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  
  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, [fetchUrl]);
  
  const leftSlide = () => {
    let slider = document.getElementById(`slider${forSlider}`);
    slider.scrollLeft -= 500;
  };
  const rightSlide = () => {
    let slider = document.getElementById(`slider${forSlider}`);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <IoIosArrowDropleftCircle
          onClick={leftSlide}
          size={40}
          className="bg-white rounded-full absolute opacity-50
        left-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block  left-4"
        />
        <div
          id={`slider${forSlider}`}
          className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <Movie like={like} setLike={setLike} key={movie.id} movie={movie} />
          ))}
        </div>
        <IoIosArrowDroprightCircle
          onClick={rightSlide}
          size={40}
          className="bg-white rounded-full absolute opacity-50 right-4 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
