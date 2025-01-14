import { useState } from "react";
import OpenAI from "openai";

export default function Hero() {
  const [chatInput, setChatInput] = useState("");
  const [gptResponse, setGptResponse] = useState("");

  const openai = new OpenAI({
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: chatInput,
        },
      ],
    });

    setGptResponse(completion.choices[0].message.content);
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
          <div className="gpt-response">{gptResponse}</div>
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
