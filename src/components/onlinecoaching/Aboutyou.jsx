import Transition from "../layout/Transition";

const stepItems = [
  {
    no: "01",
    title: "want to drop fat?",
    content:
      "Drop fat from the moment you start with a simple formula for success. Calorie deficit + optimised macros + structured weight training = fat loss and muscle maintenance.",
  },
  {
    no: "02",
    title: "Want more muscle?",
    content:
      "Feel stronger and more focussed from the first session with carefully structured training designed for you, your goals and ability. Boost your lifts, build more muscle and break plateaus.",
  },
  {
    no: "03",
    title: "Want to stay motivated?",
    content:
      "When you see amazing progress it’s hard not to stay motivated. Stop wasting time with a trial and error approach and stop losing motivation. Work hard on the right areas without burning out and get the support you need to build positive habits and live your best life.",
  },
];

export default function Aboutyou() {
  return (
    <div className="aboutyou">
      <div className="aboutyou-title">
        <h4>all about you </h4>
        <h1>how we work</h1>
        <hr />
      </div>
      <div className="aboutyou-steps">
        {stepItems.map((item) => (
          <Transition className="step">
            <h1 className="step-no">{item.no}</h1>
            <div className="step-content">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
}
