import { BooksProvider } from "./context/booksContext.tsx"
import Add from "./components/Add.tsx"
import Books from "./components/Books.tsx"
import { Col, Container, Row } from "react-bootstrap"

function App() {
  return (
    <BooksProvider>
      <Container fluid>
        <Row className="mt-5 mb-4">
          <Col><h1 className="text-center">Moje obľúbené knihy</h1></Col>
        </Row>
        <Row>
          <Col sm={6} className="mb-5"><Add /></Col>
          <Col sm={6}><Books /></Col>
        </Row>
      </Container>
    </BooksProvider>
  )
}

export default App
