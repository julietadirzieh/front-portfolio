import { Video } from "cloudinary-react";

const VideoPlayer = () => {
  return (
    <div className="px-4 md:px-16 pt-8 grid md:grid-cols-3 gap-8 items-center w-full">
      <Video
        className="rounded-xl w-full p-1 bg-bordo"
        cloudName="dno4arq1n"
        publicId="https://res.cloudinary.com/dno4arq1n/video/upload/v1683227804/BRYAN%20DE%20LUCAS/gottalent_yvubqj.mov#t=7"
        controls
      />
      <Video
        className="rounded-xl w-full p-1 bg-bordo"
        cloudName="dno4arq1n"
        publicId="https://res.cloudinary.com/dno4arq1n/video/upload/v1683227859/BRYAN%20DE%20LUCAS/gottalent2_dsmimt.mp4#t=19"
        controls
      />
      <Video
        className="rounded-xl w-full p-1 bg-bordo"
        cloudName="dno4arq1n"
        publicId="https://res.cloudinary.com/dno4arq1n/video/upload/v1683227795/BRYAN%20DE%20LUCAS/gottalent1_p7gpnu.mov#t=16"
        controls
      />
      {/*       <video controls className="rounded-xl w-full p-1 bg-bordo">
        <source src="/videos/gottalent.MOV#t=7" />
      </video>
      <video controls className="rounded-xl w-full p-1 bg-bordo">
        <source src="/videos/gottalent2.MP4#t=19" />
      </video>
      <video controls className="rounded-xl w-full p-1 bg-bordo">
        <source src="/videos/gottalent1.MOV#t=16" />
      </video> */}
      {/*       <video controls className="rounded-xl w-full p-1 bg-bordo">
        <source src="/videos/bryan.mp4#t=11,130" />
      </video> */}
    </div>
  );
};

export default VideoPlayer;
