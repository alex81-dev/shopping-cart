import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const CounterButton = ({ value = 1 }) => {
  const [ counter, setCounter ] = useState( value )

  const handleClickAdd = () => {
    setCounter( counter + 1 )
  }

  const handleClickSub = () => {
    counter > 0 ? setCounter( counter - 1 ) : setCounter( counter )
  }
  
  //const handleSub = () => {
  //  setCounter( counter - 1 )
  //}
  
  return (
    <>
      <ButtonGroup aria-label = "outlined primary button group" color = "primary" size = "small">
        <Button onClick = { handleClickSub }>-</Button>
        <Button>{ counter }</Button>
        <Button onClick = { handleClickAdd }>+</Button>
      </ButtonGroup>
    </>
  )
}

CounterButton.propTypes = {
  value: PropTypes.number.isRequired
}

CounterButton.defaultProps = {
  value: 1
}

export default CounterButton
