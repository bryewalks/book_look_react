import * as React from 'react'
import axios from 'axios'
import DisplayBook from 'components/DisplayBook'

interface Book {
  id: number,
  author: string,
  title: string,
  publisher: string,
  image_url: string,
  read: boolean
}

const BooksIndex: React.FC = (props: any) => {
  const [books, setBooks] = React.useState([] as any)

  React.useEffect(() => {
    axios
      .get('/api/books')
      .then(response => setBooks(response.data))
  }, []);

const updateRead = (event: any, book: Book, index: number) => {
  event.preventDefault();
  axios
    .patch(`/api/books/${book.id}`, {read: !book.read})
    .then(response => {
                        books.splice(index, 1, response.data)
                        setBooks([...books])
                        })
}

  return (
    <div>
      {books && (
        books.map((book: Book, index: number) => {
          return <div key={index}>
                    <DisplayBook book={book} />
                    <button onClick={ e => {updateRead(e, book, index)}}>{book.read ? "Mark unread" : "Mark read"}</button>
                 </div>
        }
      ))}
    </div>
  )
}

export default BooksIndex