import "./App.css";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import Navigation from "./components/Navigation";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import { Rotate, Zoom } from "react-reveal";
import Progress from "./components/Progress";

function App() {
  return (
    <div>
      <Navigation />
      <Zoom left>
        <Header />
      </Zoom>
      <main className="py-3">
        <Container>
          <Rotate top left delay={500}>
            <Timeline />
          </Rotate>
          <Work />
          <Progress />
        </Container>
      </main>
    </div>
  );
}

export default App;
