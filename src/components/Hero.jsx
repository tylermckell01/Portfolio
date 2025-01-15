import { useState } from "react";
import OpenAI from "openai";

export default function Hero() {
  const [chatInput, setChatInput] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: chatInput,
          },
        ],
      });

      setGptResponse(completion.choices[0].message.content);
    } catch (error) {
      setGptResponse(
        "An error occurred while fetching the response... probably out of credits"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero">
      <div className="left">
        <div className="title">Welcome.</div>
        <form onSubmit={handlesubmit}>
          <div className="gpt">
            ask me ANYTHING...
            <input
              type="text"
              placeholder="Chatgpt"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button type="submit">submit</button>
          </div>
          <div className="gpt-response">
            {loading
              ? "Loading..."
              : gptResponse
              ? gptResponse
              : "this is where your output will be"}
          </div>
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
