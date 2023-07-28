import { Image } from "antd";
import Transition from "../layout/Transition";

const videos = [
  {
    key: "1",
    url: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/about-1.mp4",
    img: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/v1.PNG",
  },
  {
    key: "2",
    url: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/about-2.mp4",
    img: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/v2.PNG",
  },
  {
    key: "3",
    url: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/about-3.mp4",
    img: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/v3.PNG",
  },
  {
    key: "4",
    url: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/about-4.mp4",
    img: "https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/v4.PNG",
  },
];

const videoElements = document.getElementsByClassName("video-player");

for (let i = 0; i < videoElements.length; i++) {
  const videoElement = videoElements[i];

  videoElement.addEventListener("blur", () => {
    videoElement.pause();
  });
}

export default function Videos() {
  return (
    <div className="videos">
      <Transition className="videos-content">
        <h1>
          Why Choose <span>kareem amr</span> Personal Trainer?
        </h1>
        <p>
          I want to help men and women that have felt like they've been spinning
          their wheels with their fitness and health. I grasp that different
          diets can seem attractive and trying various solutions to find the
          style of eating that's right for you seems essential - but it can also
          slow your progress down while you are spending time on trial and
          error.
        </p>
      </Transition>
      <div className="videos-videos-container">
        {videos.map((video) => (
          <Image
            className="video"
            preview={{
              imageRender: () => (
                <video className="video-player" controls src={video.url} />
              ),
              toolbarRender: () => null,
            }}
            src={video.img}
          />
        ))}
      </div>
    </div>
  );
}
