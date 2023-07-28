import Description from "../components/home/Description";
import Header from "../components/home/Header";
import Mission from "../components/home/Mission";
import ProgramCards from "../components/home/ProgramCards";
import Reviews from "../components/home/Reviews";
import Testimonial from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Testimonial />
      <ProgramCards />
      <Mission />
      <Description />
      <Reviews />
    </div>
  );
}
