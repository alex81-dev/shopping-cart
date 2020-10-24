import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckoutPage from './pages/CheckoutPage'
import MainPage from './pages/MainPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <MainPage />
        </Route>
        <Route path = "/shoppingcart">
          <ShoppingCartPage />
        </Route>
        <Route path = "/checkout">
          <CheckoutPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router> 
  )
}

export default App
