import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import requests from "../apiRequests";
const Home = () => {
  return (
    <div>
      <Main />
      <Row title='Popular' fetchUrl={requests.popularMovies}/>
      <Row title='TopRated' fetchUrl={requests.topRatedMovies}/>
      <Row title='Trending' fetchUrl={requests.trendingMovies}/>
      <Row title='Upcoming' fetchUrl={requests.upComingMovies}/>
    </div>
  );
};

export default Home;
