import { ChangeEvent, FC, useEffect, useState } from "react"
import { useBooksContext } from "../context/booksContext.tsx"
import { IBook } from "../@types/books"
import { FloatingLabel, Form, Card, ListGroup } from "react-bootstrap"
import Details from "./Details.tsx"


const Books: FC = () => {
  const { books } = useBooksContext()
  const [filterBy, setFilterBy] = useState<string>("")
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>(books)
  const [showBookId, setShowBookId] = useState(0)

  const filterByName = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilterBy(event.currentTarget.value)
  }

  useEffect(() => {
    setFilteredBooks(books.filter((book) => book.name.includes(filterBy)))
  }, [filterBy, books.length])

  const handleShowDetails = (bookId: number) => setShowBookId(bookId)

  const handleCloseDetails = () => setShowBookId(0)

  return (
    <div className="books">
      <h2>Knihy</h2>
      <Card className="mb-5">
        <Card.Header>
          <FloatingLabel
            controlId="search"
            label="Filtrovať podľa názvu"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Filtrovať podľa názvu" onChange={filterByName} />
          </FloatingLabel>
        </Card.Header>
        {filteredBooks.length ? (
          <ListGroup variant="flush">
            {filteredBooks.map((book) => (
              <ListGroup.Item action key={book.id} onClick={() => handleShowDetails(book.id)}>
                {`${book.author ? `${book.author}: ` : ""}`}{book.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Card.Body>Nenájdené žiadne knihy</Card.Body>
        )}
      </Card>
      <Details bookId={showBookId} handleClose={handleCloseDetails} />
    </div>
  )
}

export default Books