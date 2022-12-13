import { useRef } from "react";
import { useGsapTitleUnveil } from "../hooks/gsap";
const About = () => {
  const sectionTitleRef = useRef(null);
  const AboutRef = useRef(null);
  useGsapTitleUnveil(sectionTitleRef, AboutRef);
  return (
    <section className="about wrapper" ref={AboutRef}>
      <h2 className="section-title " ref={sectionTitleRef}>
        About
      </h2>
      <p>
        Explore the lost treasures and shining stars of the 1990s! Find your
        favorite cartoons, TV shows, music albums, & more with easy filtering
        functionality. With Immemorial, stay up-to-date with all your 90s
        favorites while turning back time.
      </p>
      <p>
        What's the only era that never seems to end? The 90s! Journey through
        appreciating items from 90s TV, music, and art. See if you remember old
        toys, cartoons, or prints of such. Indulge in some nostalgia before our
        world falls back into the dark ages.
      </p>
    </section>
  );
};

export default About;
