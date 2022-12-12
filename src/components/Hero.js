import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoDropping,
  useGsapPhotoLavitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photosArr, 2.5);
  useGsapPhotoLavitate(photosArr, heroRef);
  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          className="photo one"
          ref={photo1Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo two"
          ref={photo2Ref}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5336487/pexels-photo-5336487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div
          className="photo three"
          ref={photo3Ref}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div
          className="photo four"
          ref={photo4Ref}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4201333/pexels-photo-4201333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div
          className="photo five"
          ref={photo5Ref}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5842/people-vintage-photo-memories.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
