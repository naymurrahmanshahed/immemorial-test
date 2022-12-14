import { useRef } from "react";
import { useGsapBlogImgUnveil } from "../hooks/gsap";
const Blog = ({ needFullHeight }) => {
  const blogImgRef1 = useRef(null);
  const blogImgRef2 = useRef(null);
  const blogImgRef3 = useRef(null);
  const blogImgRef4 = useRef(null);
  const blogImgRef5 = useRef(null);

  const blogImgArr = [
    blogImgRef1,
    blogImgRef2,
    blogImgRef3,
    blogImgRef4,
    blogImgRef5,
  ];

  useGsapBlogImgUnveil(blogImgArr);

  return (
    <section className={`${needFullHeight && "m-h-100vh"}  blogs wrapper`}>
      <h2 className="section-title">Blog</h2>
      <div className="blog-wrapper">
        <div className="blog-content" ref={blogImgRef1}>
          <div
            className="blog-photo blog-one"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/210156/pexels-photo-210156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          ></div>
          <span className="blog-text">
            <h4>90's Car</h4>
            <p>Classic Blue Coupe Parked Besides Red Pickup Truck</p>
          </span>
        </div>
        <div className="blog-content" ref={blogImgRef2}>
          <div
            className="blog-photo blog-two"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/8885024/pexels-photo-8885024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          ></div>
          <span className="blog-text">
            <h4>90's party</h4>
            <p>A Group of Friends Having a Party</p>
          </span>
        </div>
        <div className="blog-content" ref={blogImgRef3}>
          <div
            className="blog-photo blog-three"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/8885036/pexels-photo-8885036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          ></div>
          <span className="blog-three-text blog-rotate-text">
            <h4>90's Computer</h4>
            <p>Back View of a Man Typing on a Keyboard while Sitting</p>
          </span>
        </div>
        <div className="blog-content" ref={blogImgRef4}>
          <div
            className="blog-photo blog-four"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/10600768/pexels-photo-10600768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          ></div>
          <span className="blog-text">
            <h4>90's Telephone</h4>
            <p>Close-Up Photo of a Person Using a Pink Rotary Phone</p>
          </span>
        </div>
        <div className="blog-content" ref={blogImgRef5}>
          <div
            className="blog-photo blog-five"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/6983032/pexels-photo-6983032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
          ></div>
          <span className="blog-text">
            <h4>90's Disco</h4>
            <p>A Person's Hand Carrying a Disco Ball</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Blog;
