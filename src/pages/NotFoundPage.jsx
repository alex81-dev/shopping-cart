import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <Typography
        variant = "h4"
        color = "inherit">
        404 | La página no existe
      </Typography>
      
      <Link
        aria-label = "menu"
        color = "inherit"
        component = { RouterLink }
        to = "/">
        Volver al inicio
      </Link>
    </>
  )
}

export default NotFoundPage
