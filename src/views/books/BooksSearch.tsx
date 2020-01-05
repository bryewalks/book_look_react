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

const BooksSearch: React.FC = (props: any) => {
  const [books, setBooks] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [author, setAuthor] = React.useState("")
  const [publisher, setPublisher] = React.useState("")
  const [imageUrl, setImageUrl] = React.useState("")

  const handleSearch = (event: any) => {
    event.preventDefault();
    let params = {
      search_term: searchTerm
    }
    axios
      .get('/api/books/search', {params})
      .then(response => setBooks(response.data))
  }

  const handleSubmit = (event: any, book: Book) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" onChange={e => {setSearchTerm(e.target.value)}} />
        <button>Search</button>
      </form>
      {books && (
        books.map((book: Book, index: number) => {
          return <div key={index}>
                    <img src={book.image_url} alt={book.title}></img>
                    <h3>Title</h3>
                      {book.title}
                    <h3>Publisher</h3>
                      {book.publisher}
                    <h3>Author</h3>
                      {book.author}
                 </div>
        }
      ))}
    </div>
  )
}

export default BooksSearch