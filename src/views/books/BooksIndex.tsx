import * as React from 'react'
import axios from 'axios'

interface Book {
  id: number,
  author: string,
  title: string,
  publisher: string,
  image_url: string,
  read: boolean
}

const BooksIndex: React.FC = (props: any) => {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    axios
      .get('/api/books')
      .then(response => setBooks(response.data))
  }, []);

  return (
    <div>
      {books && (
        books.map((book: Book, index: number) => {
          return <div key={index}>
                    <img src={book.image_url || process.env.PUBLIC_URL + 'Book.png'} alt={book.title}></img>
                    <h3>Title</h3>
                      {book.title}
                    <h3>Publisher</h3>
                      {book.publisher}
                    <h3>Author</h3>
                      {book.author}
                    <h3>Read?<input type="checkbox" name="read?" checked={book.read} /></h3>
                 </div>
        }
      ))}
    </div>
  )
}

export default BooksIndex