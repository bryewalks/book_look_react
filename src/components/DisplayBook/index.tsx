import * as React from 'react'

interface Props {
  book: Book
}

interface Book {
  id: number,
  author: string,
  title: string,
  publisher: string,
  image_url: string,
  read: boolean
}

const DisplayBook: React.FC<Props> = (props: any) => {
  return (
    <div>
      <img src={props.book.image_url || process.env.PUBLIC_URL + 'Book.png'} alt={props.book.title}></img>
      <h3>Title</h3>
        {props.book.title}
      <h3>Publisher</h3>
        {props.book.publisher}
      <h3>Author</h3>
        {props.book.author}
      <br></br>
    </div>
  )
}

export default DisplayBook