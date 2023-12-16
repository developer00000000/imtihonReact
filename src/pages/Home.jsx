import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // import required modules
// import { Keyboard, Pagination, Navigation } from 'swiper/modules';
// import Slider from "react-slick";
import { useEffect } from "react";
import VideoCard from "../components/VideoCard";
// import { Component } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const url = "https://youtube-v3-alternative.p.rapidapi.com/trending";
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '600ca960e0mshdfe24a65e26083fp1d3d24jsncd85c0a116f5',
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  async function getData(url, options) {
    let respons = await fetch(url, options);
    let deta = await respons.json();
    setData(deta.data);
  }
  console.log(data);

  useEffect((i) => {
    getData(url, options);
  }, []);

  return (
    <div className="home">
      {data?.map((item) => (
        <VideoCard key={item.videoId} item={item} id={item.videoId} lengthText={item.lengthText} title={item.title} publishedText={item.publishedText} viewCount={item.viewCount}  channelTitle={item.channelTitle} />
      ))}
    </div>
  );
}
