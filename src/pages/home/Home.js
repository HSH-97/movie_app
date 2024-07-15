import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(nowData);

  return <div>Home</div>;
};
