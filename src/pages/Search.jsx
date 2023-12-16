import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

function Search() {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchParams.get(
    "search_value"
  )}&geo=US&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c2f6b51631msh8e553a8cbc46edep199347jsnde38d0389611",
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchParams]);

  console.log(data);

  return (
    <div>
      {data?.data.map((item) => (
        <VideoCard url={item} item={item} id={item.videoId} />
      ))}
    </div>
  );
}

export default Search;
