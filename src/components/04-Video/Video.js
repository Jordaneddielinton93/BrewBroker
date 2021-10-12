import { VideoStyle } from "./Video.style";
import videoIMG from "../Images/videoimg.png"
const Video = () => {
  return ( 
    <VideoStyle>
        <h1 style={{
          paddingBottom:"20px"
        }}
        >Smart Beer Procurement</h1>
        <img alt="" srcset={videoIMG} />
    </VideoStyle>
   );
}
 
export default Video;