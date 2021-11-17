import React from 'react';
import BooksApp from './components/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Currently from './pag/Currently';
import WantToRead from './pag/WantToRead';
import Read from './pag/Read'

function Home(){

    return(
        <Router>
      <BooksApp />
      <Switch>
        <Route path='/currently'>
          <Currently />
        </Route>
        <Route path='/WantToRead'>
          <WantToRead />
        </Route>
        <Route path='/Read'>
          <Read />
        </Route>
      </Switch>
    </Router>
    )
}

export default Home