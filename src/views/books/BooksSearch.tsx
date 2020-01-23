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

const BooksSearch: React.FC = (props: any) => {
  const [books, setBooks] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState("")

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
    let params = {
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      image_url: book.image_url
    }
    axios
    .post('/api/books/', params)
    .then(response => console.log("success"))
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
                    <DisplayBook book={book} />
                    <button onClick={ e => {handleSubmit(e, book)}}>Add</button>
                 </div>
        }
      ))}
    </div>
  )
}

export default BooksSearch