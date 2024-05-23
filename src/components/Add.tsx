import { FC, FormEvent, useEffect, useRef, useState } from "react"
import { useBooksContext } from "../context/booksContext.tsx"
import { Button, FloatingLabel, Form } from "react-bootstrap"

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  author: HTMLInputElement
  description: HTMLTextAreaElement
}

interface BookFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const Add: FC = () => {
  const { addBook } = useBooksContext()
  const ref = useRef<HTMLFormElement | null>(null)
  const [validated, setValidated] = useState(false)
  const [valid, setValid] = useState(false)

  const handleAddBook = (event: FormEvent<BookFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity()) {
      setValid(true)

      const formElements = form.elements
      addBook({
        id: 0,
        name: formElements.name.value,
        author: formElements.author.value,
        description: formElements.description.value
      })
    } else {
      event.preventDefault()
      event.stopPropagation()
      setValid(false)
    }
    setValidated(true)
  }

  useEffect(() => {
    if (valid) {
      ref.current?.reset()
      setValidated(false)
    }
  }, [valid])


  return (
    <div>
      <h2>Pridať knihu</h2>
      <Form noValidate validated={validated} onSubmit={handleAddBook} ref={ref}>
        <FloatingLabel
          controlId="name"
          label={<>Názov<span aria-label="required">*</span></>}
          className="mb-3"
        >
          <Form.Control type="text" required placeholder="Názov" />
          <Form.Text className="text-muted">
            Položky označené hviezdičkou (*) sú povinné.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Prosím napíšte meno knihy.
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
          controlId="author"
          label="Autor"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Autor" />
        </FloatingLabel>
        <FloatingLabel controlId="description" label="Opis">
          <Form.Control
            as="textarea"
            placeholder="Opis"
            style={{ height: "100px" }}
            maxLength={300}
          />
          <Form.Text className="text-muted">
            Maximálna dĺžka je 300 znakov.
          </Form.Text>
        </FloatingLabel>

        <div className="d-grid mt-3">
          <Button variant="primary" type="submit" size="lg">
            Uložiť
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Add