import {useContext, useState} from 'react'
import { BsHeart, BsSuitHeartFill } from "react-icons/bs";
import { AuthContext } from '../../context/authContext';
import { db } from '../../firebase/firebaseConfigs';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {ToastifyContext} from '../../context/ToastifyContext'

const Movie = ({movie}) => {
  
const [fav, setFav] = useState(false)
const [like, setLike] = useState(false);
const {user} = useContext(AuthContext)
const notify = useContext(ToastifyContext)



// grabbing spesific user db.
const movieID = doc(db, 'users', `${user?.email}`)
const saveFavMovie = async() => {
  if(user?.email){
    setLike(prev => !prev)
    setFav(true)
    await updateDoc(movieID, {
      favMovies : arrayUnion({
        id : movie.id,
        title : movie.title,
        img: movie.backdrop_path
      })
    })
  }else{
    // alert("Please login.")
    notify()
  }
}
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
      <p onClick={saveFavMovie}>
        {like ? (
          <BsSuitHeartFill className="absolute top-4 left-4 text-red-600" />
        ) : (
          <BsHeart  className="absolute top-4 left-4 text-red-600" />
        )}
      </p>
    </div>
  </div>
  </>
  )
}

export default Movie