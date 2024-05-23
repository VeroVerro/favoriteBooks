import { FC } from "react"
import { Button, Modal } from "react-bootstrap"
import { useBooksContext } from "../context/booksContext.tsx"

type DetailsProps = {
  bookId: number;
  handleClose: () => void;
};

const Details: FC<DetailsProps> = ({ bookId, handleClose }) => {
  const { books } = useBooksContext()
  const book = books.find(book => book.id === bookId)
  const show = !!bookId

  return show && book ? (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`${book.author ? `${book.author}: ` : ""}`}{book.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{book.description ? book.description : "Kniha nemá opis."}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null
}

export default Details