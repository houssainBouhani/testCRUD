// bootstrap components
import { Col, Container, Row } from "react-bootstrap";
// components
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
 
  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col className="mt-5 d-flex align-items-center">
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
