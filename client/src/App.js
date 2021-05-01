import "./App.css";
import Header from "./Components/Header";
import Categories from "./Components/Sidebar/Categories";
import Searchbar from "./Components/Sidebar/Searchbar";
import CoffeCard from "./Components/Content/CoffeCard";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>

        <Row>
          <Header></Header>
        </Row>

        <Row className="container mt-2">
          <Col className="col-3 my-2 border-right">
            <Searchbar />
            <Categories />
          </Col>

          <Col className="col-9 my-2">
            <CoffeCard />
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default App;
