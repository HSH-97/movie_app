import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import "swiper/css";
import { Movies } from "./components/Movies";
import { MainBanner } from "./components/MainBanner";
import { Title } from "../../components/Title";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();

        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(nowData);
  console.log(nowData);
  // console.log(isLoading);
  // console.log(`인기영화: ${popData}`);
  // console.log(`평점 좋음: ${topData}`);
  // console.log(`개봉 예정:  ${upData}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title title="HOME" />
          <MainBanner data={nowData[0]} />
          <Movies title="현재 상영 영화" movieData={nowData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="높은 평점" movieData={topData} />
          <Movies title="개봉예정" movieData={upData} />
        </>
      )}
    </>
  );
};
