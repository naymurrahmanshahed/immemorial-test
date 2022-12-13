import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";
const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title ">Featured</h2>
      <div className="features">
        <div className="features-left">
          <span className="features-title">90's telephone</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Black Rotary Telephone on White Surface"
          />
          <span
            className="feature-shutter-left"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="features-right">
          <span className="features-title">90's Cassette player</span>
          <img
            src="https://images.pexels.com/photos/5158207/pexels-photo-5158207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Confident youthful multiracial guys listening to old songs on retro record player
            "
          />
          <span
            className="feature-shutter-right"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
