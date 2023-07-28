import Aboutyou from "../components/onlinecoaching/Aboutyou";
import Header from "../components/onlinecoaching/Header";
import Services from "../components/onlinecoaching/Services";
import Plans from "../components/onlinecoaching/Plans";
export default function Onlinecoaching() {
  return (
    <div className="onlinecoaching-page">
      <Header />
      <Services />
      <Aboutyou />
      <Plans />
    </div>
  );
}
