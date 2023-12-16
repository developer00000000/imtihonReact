import { useNavigate } from "react-router-dom";

function VideoCard({ item, customImage, lengthText, id,channelTitle,title,publishedText,viewCount}) {
  const goPage = useNavigate();
  if (item.type == "channel") {
    return null;
  }
  return (
    <div
      className="video"
      onClick={() => {
        goPage(`/home/${id}`);
      }}
    >
       
       <img
        src={`${customImage ? customImage : item.thumbnail[0].url}`}
        alt=""
      />
      <span className="videoTime">{lengthText}</span>
      <h4>{title}</h4>
      <div className="video-data">
          <div>
            <span>{viewCount} views</span>
            <span>{publishedText}</span>
          </div>
          <span>{channelTitle}</span>
      </div>
    </div>
  );
}

export default VideoCard;
