import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import {RiDeleteBin6Line} from 'react-icons/ri'
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { db } from "../../firebase/firebaseConfigs";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
const FavMovies = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const leftSlide = () => {
    let slider = document.getElementById(`slider`);
    slider.scrollLeft -= 500;
  };
  const rightSlide = () => {
    let slider = document.getElementById(`slider`);
    slider.scrollLeft += 500;
  };

useEffect(() => {
onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
    setMovies(doc.data()?.favMovies)
})
},[user?.email])

const movieRef = doc(db, 'users', `${user?.email}`)

const deleteFavList = async(movieID) => {
try {
    const newMoviesArr = movies.filter(movie => movie.id !== movieID)
    await updateDoc(movieRef,{
        favMovies : newMoviesArr
    })
} catch (error) {
    console.log(error);
}
}

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Favorite List</h2>
      <div className="relative flex items-center group">
        <IoIosArrowDropleftCircle
          onClick={leftSlide}
          size={40}
          className="bg-white rounded-full absolute opacity-50
        left-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-4"
        />
        <div
          id={`slider`}
          className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 transition-all opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p 
                onClick={() => deleteFavList(movie?.id)}
                className="absolute top-4 left-5 text-gray-300 "><RiDeleteBin6Line /></p>
              </div>
            </div>
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

export default FavMovies;
