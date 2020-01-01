import React from 'react';
import './index.css';
import BooksIndex from 'views/books/BooksIndex'
import { Route, 
          BrowserRouter as Router, 
          Switch 
        } from 'react-router-dom'

export const Routes = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={BooksIndex} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}