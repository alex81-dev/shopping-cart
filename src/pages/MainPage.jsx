import React from 'react'
import Typography from '@material-ui/core/Typography'

import Menu from '../components/Menu/Menu'

const MainPage = () => {
  return (
    <>
      <Menu />
      
      <Typography
        variant = "h4"
        color = "inherit">
        Adquiera sus productos deseados
      </Typography>
    </>
  )
}

export default MainPage
