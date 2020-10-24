import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

import Menu from '../components/Menu/Menu'
import Product from '../components/Product/Product'

const ShoppingCartPage = () => {
  return (
    <>
      <nav>
        <Menu />
      </nav>

      <br />
      <br />

      <main>
        <Grid
          container
          direcction = "row"
          spacing={ 1 }>
            <Grid
              item
              xs = { 12 }
              sm container>
              <section>
                <Product />
                <Product />
              </section>
            </Grid>
            <Grid
              item
              xs = {12}
              sm container>
              <aside>
                Inicio checkout
                <Product />
                <Link
                  aria-label = "menu"
                  color = "inherit"
                  component = { RouterLink }
                  to = "/checkout">
                  Checkout
                </Link>
                Fin checkout
              </aside>
            </Grid>

        </Grid>
      </main>
    </>
  )
}

export default ShoppingCartPage
