const key = "0e9d3030995b7d674944d3f5386f39f7"

 const requests = {
    popularMovies : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    topRatedMovies : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    trendingMovies : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
    upComingMovies : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,

}

export default requests