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

const markRead = (event: any, book: Book) => {
  let params = {
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    image_url: book.image_url,
    read: true
  }
  axios
  .put('/api/books/', params)
  .then(response => console.log("success"))
}

const markUnread = (event: any, book: Book) => {
  console.log(book)
}

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
                    <br></br>
                    {book.read ? <button onClick={ e => {markUnread(e, book)}}>Mark unread</button> : <button onClick={ e => {markRead(e, book)}}>Mark read</button>}
                 </div>
        }
      ))}
    </div>
  )
}

export default BooksIndex