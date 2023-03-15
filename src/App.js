import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import "./App.css";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY1,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function onAsk() {
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + String(process.env.REACT_APP_OPENAI_API_KEY1),
    //   },
    //   body: JSON.stringify({
    //     prompt: answer,
    //     temperature: 0.1,
    //     // max_tokens: Math.floor(fileLength / 2),
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0.5,
    //     stop: ['"""'],
    //   }),
    // };
    // fetch(
    //   "https://api.openai.com/v1/engines/code-davinci-001/completions",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setQuestion("");
    //     console.log(data.choices[0].text);
    //   })
    //   .catch((err) => {
    //     console.log("Ran out of tokens for today! Try tomorrow!");
    //   });

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(completion.data.choices[0].message);
  }
  async function generateImg() {
    const completion = await openai.createImage({
      prompt: question,
      n: 2,
      size: "1024x1024",
    });
    console.log(completion.data);
  }
  function onTypeQuestion(e) {
    setQuestion(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Input your text"
          value={question}
          onChange={onTypeQuestion}
        />
        <button onClick={onAsk}>ask</button>
        <button onClick={generateImg}>generateImg</button>
        <div className="answer-box">{answer}</div>
      </header>
    </div>
  );
}

export default App;
