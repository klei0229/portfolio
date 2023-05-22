import "./App.css";
import Summary from "./Summary";
import Nav from "./Nav";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>

      <Header></Header>
      <Nav></Nav>
      <Summary></Summary>
      <About></About>
      <Education></Education>
      <Projects></Projects>
    </div>
  );
}

export default App;
