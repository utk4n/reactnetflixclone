import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import requests from "../apiRequests";
const Home = () => {
  return (
    <div>
      <Main />
      <Row forSlider="1" title="Popular" fetchUrl={requests.popularMovies} />
      <Row forSlider="2" title="Top Rated" fetchUrl={requests.topRatedMovies} />
      <Row forSlider="3" title="Trending" fetchUrl={requests.trendingMovies} />
      <Row forSlider="4" title="Upcoming" fetchUrl={requests.upComingMovies} />
    </div>
  );
};

export default Home;
