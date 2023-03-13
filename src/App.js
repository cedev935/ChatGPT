import "./App.css";
import { ChatGPT } from "chatgpt-official";

function App() {
  async function chat() {
    let bot = new ChatGPT(process.env.REACT_APP_API_KEY);
    let res = bot.ask("Hello? Nice to meet you");
    console.log(await res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Input your text" />
        <div className="answer-box"></div>
      </header>
    </div>
  );
}

export default App;
