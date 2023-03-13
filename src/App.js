import "./App.css";
import { ChatGPT } from "chatgpt-official";

function App() {
  async function chat() {
    let bot = new ChatGPT("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");
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
