import React from 'react';
import './index.css';
import BooksIndex from 'views/books/BooksIndex'
import BooksSearch from 'views/books/BooksSearch'
import Login from 'views/auth/Login'
import Logout from 'views/auth/Logout'
import Signup from 'views/auth/Signup'

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
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/search" component={BooksSearch} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}