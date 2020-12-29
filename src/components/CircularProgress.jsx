import { useEffect, useRef } from "react";

const CircularProgress = ({ duration }) => {
  const radius = 45;
  const circumference = radius * 2 * Math.PI;

  const circleRef = useRef();
  const textRef = useRef();

  let circleAnimation = useRef();

  useEffect(() => {
    const getStroke = (percent) =>
      circumference - (percent / 100) * circumference;
    // Using Native Web Animation API
    circleAnimation.current = circleRef.current.animate(
      [{ strokeDashoffset: getStroke(0) }, { strokeDashoffset: 0 }],
      {
        easing: "linear",
        duration,
        iterations: 1,
      }
    );

    circleAnimation.current.pause();

    //Cancels animation on unmount
    return () => circleAnimation.current.cancel();
  }, [duration, circumference]);

  useEffect(() => {
    let frame = null;
    function textAnimation() {
      let progress = circleAnimation.current.currentTime;
      textRef.current.textContent =
        ((progress / duration) * 100).toFixed() + "%";
      frame = requestAnimationFrame(textAnimation);
    }
    textAnimation();

    return () => cancelAnimationFrame(frame);
  }, [duration]);

  const playAnimation = () => {
    circleAnimation.current.play();
  };

  const pauseAnimation = () => {
    circleAnimation.current.pause();
  };

  return (
    <div>
      <svg viewBox="0 0 100 100" className="mx-auto mb-6 w-64">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeWidth="6"
          className="stroke-current text-gray-700"
        />
        <text
          ref={textRef}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-current text-white"
        />
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeWidth="3"
          className="stroke-current text-green-500 transform rotate-90 origin-center"
          strokeDasharray={circumference}
          strokeLinecap="round"
        />
      </svg>
      <div className="flex justify-center">
        <button
          onClick={playAnimation}
          className="flex items-center px-4 py-1 mr-4 border border-white rounded hover:bg-gray-700 "
        >
          Start
        </button>
        <button
          onClick={pauseAnimation}
          className="flex items-center px-4 py-1 mr-4 border border-white rounded hover:bg-gray-700 "
        >
          Pause
        </button>
      </div>
    </div>
  );
};

export default CircularProgress;
