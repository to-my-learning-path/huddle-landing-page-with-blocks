import React from "react";
import "./index.css";
const sectionContentList = [
  {
    title: "Grow Together",
    paragraph:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    imageUrl: "./images/illustration-grow-together.svg",
    imageToRight: true,
  },
  {
    title: "Flowing Conversations",
    paragraph:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    imageUrl: "./images/illustration-flowing-conversation.svg",
    imageToRight: false,
  },
  {
    title: "Your Users",
    paragraph:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    imageUrl: "./images/illustration-your-users.svg",
    imageToRight: true,
  },
];

const Section = ({ title, paragraph, imageUrl, imageToRight }) => {
  return (
    <section>
      <div className="section__content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
      <img
        src={imageUrl}
        className={imageToRight ? "grid-item--right" : ""}
        alt=""
      />
    </section>
  );
};

const Main = () => {
  return (
    <main>
      <div className="container">
        {sectionContentList.map((item, index) => (
          <Section
            key={index}
            title={item.title}
            paragraph={item.paragraph}
            imageUrl={item.imageUrl}
            imageToRight={item.imageToRight}
          />
        ))}
        <section className="cta-section">
          <h2>Ready To Build Your Community?</h2>
          <a href="#">Get Started For Free</a>
        </section>
      </div>
    </main>
  );
};

export default Main;
