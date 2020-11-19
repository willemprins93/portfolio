import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-info">
          <h1>Willem Prins</h1>
          <img className="about-img" src="/images/self-photo.jpg" />
        </div>
        <h4 className="about-text">
          ...is a creative minded and passionate web developer with a background
          in commercial photography. He has worked across international markets
          with people of different disciplines, developing a strong eye for
          design and detail along the way. He thrives in situations where he can
          produce creative solutions to complex problems.
        </h4>
        <p className="extra-text">
          During his time as a photographer he always felt a strong curiosity
          towards tech and digital media. And, wanting to challenge himself to
          broaden his technical skillset, he discovered web-development to be
          the perfect marriage between logic, design and creative thinking.{" "}
          <br />
          <br /> He joined Ironhack shortly after where he mastered his skills
          in Javascript, HTML, CSS, MongoDB, Express, React, Node and more, in
          preparation for the next big step in his career. <br />
          <br /> His mission is to design elegant and fully responsive web
          applications front-to-back by learning the latest and most relevant
          technologies, to optimize and rethink the way we interact with
          technology in everyday life. <br />
          <br /> He is searching for a front end developer role where he can
          give 110% every day to work on contributing to compelling and
          meaningful projects!
        </p>
      </div>
    </>
  );
};

export default About;
