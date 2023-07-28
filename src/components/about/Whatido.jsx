import Transition from "../layout/Transition";

export default function Whatido() {
  return (
    <Transition className="onlinecoaching  whatido">
      <div className="onlinecoaching-img-container">
        <img
          src="https://gblryxlyxvzcajnibwcb.supabase.co/storage/v1/object/public/kareem-amr/whatido.jpg"
          alt=""
        />
      </div>
      <div className="onlinecoaching-content whatido-content">
        <h2 className="whatido-h2">What I do</h2>
        <p className="whatido-p">
          I am best known for my work as a personal trainer to the film industry
          where I have trained 100+ trainee on dozens of films. In 2013 I also
          started offering online personal training as a way of continuing to
          support clients when I was out of the country, which at that time was
          all the time as I was working with Hugh Jackman full time all over the
          world. This soon progressed into other people asking me for coaching
          and the online coaching side of things soon grew from their purely
          based on the amazing results people were achieving.
        </p>
      </div>
    </Transition>
  );
}
