import { Carousel } from "antd";

const reviewsItems = [
  {
    content:
      "Ok! That blew me away, I’m already losing weight reading this!! <3 This is the most detailed plan I’ve ever my eyes on.  The food mentioned, how to train, sets, reps, all timed to every hour, this is amazing! Thank you champ, my Allah bless you!",
    name: "jhon mark",
  },
  {
    content: "Duuuuude. Really like this. Very detailed. Thank you.",
    name: "silvester orten",
  },
  {
    content:
      "Dude, your program is really accurate, amazing, more than what I thought and exactly what I need. Million thx to you",
    name: "jhon mark",
  },
  {
    content:
      "Ok! That blew me away, I’m already losing weight reading this!! <3 This is the most detailed plan I’ve ever my eyes on.  The food mentioned, how to train, sets, reps, all timed to every hour, this is amazing! Thank you champ, my Allah bless you!",
    name: "Diego GUILLEN",
  },
  {
    content:
      "Real professional.  And I can feel that you genuinely want me to improve. Really grateful for what you’ve done to help me.",
    name: "Ahmed Farouk",
  },
];

export default function Reviews() {
  return (
    <div className="reviews">
      <img
        className="reviews-img"
        src="https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/reviewss.jpg"
        alt=""
      />

      <h1 className="reviews-title">
        <span>SUCCESS</span> STORIES
      </h1>

      <Carousel className="carousel" effect="fade" autoplay="true">
        {reviewsItems.map((item) => (
          <div className="review-card">
            <h3>{item.content}</h3>
            <p>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
