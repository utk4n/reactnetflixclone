import React from 'react'
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";

const Movie = ({movie, like, setLike}) => {
  return (
    <>
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
    <img
      className="w-full h-auto block"
      src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
      alt=""
    />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 transition-all opacity-0 hover:opacity-100 text-white">
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
        {movie?.title}
      </p>
      <p>
        {like ? (
          <BsSuitHeartFill className="absolute top-4 left-4 text-gray-300" />
        ) : (
          <BsHeart className="absolute top-4 left-4 text-gray-300" />
        )}
      </p>
    </div>
  </div>
  </>
  )
}

export default Movie