import { useState } from "react";

export default function Hero() {
  const [chatInput, setChatInput] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("chatInput:", chatInput);
  };

  return (
    <div className="hero">
      <div className="left">
        <div className="title">Welcome.</div>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="this will be chatgpt"
            onChange={(e) => setChatInput(e.target.value)}
          />
          <div className="buttons">
            <button type="submit">submit</button>
          </div>
          <div className="gpt-response">this will be the gpt response</div>
        </form>
      </div>
      <div className="right">
        <div className="sub-title">Landing page</div>
        <div className="about-text">
          This is the landing page for my website in which I showcase just some
          of my skills using a few of the languages I have learned thus far....
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          voluptates ipsa voluptatem asperiores dignissimos molestias ut dolorum
          fugiat modi quia ullam ea, autem officia cum quaerat quod totam,
          ratione assumenda?
        </div>
      </div>
    </div>
  );
}
