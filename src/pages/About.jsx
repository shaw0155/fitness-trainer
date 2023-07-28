import Header from "../components/about/Header";
import Onlinecoaching from "../components/about/Onlinecoaching";
import Startnow from "../components/about/Startnow";
import Videos from "../components/about/Videos";
import Whatido from "../components/about/Whatido";

export default function About() {
  return (
    <div className="about">
      <Header />
      <Onlinecoaching />
      <Whatido />
      <Startnow />
      <Videos />
    </div>
  );
}
