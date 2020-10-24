import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(( theme ) => ({
  formControl: {
    margin: theme.spacing( 1 ),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing( 1 ),
  },
}))

export default function SimpleSelect() {

  const classes = useStyles()
  const [ state, setState ] = React.useState('')

  const handleChange = ( event ) => {
    setState( event.target.value )
  }

  return (
    <div>
      <FormControl variant = "outlined" className = { classes.formControl }>
        <InputLabel id = "demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          labelId = "demo-simple-select-outlined-label"
          id = "demo-simple-select-outlined"
          value = { state }
          onChange = { handleChange }
          label = "Age"
        >
          <MenuItem value = "">
            <em>None</em>
          </MenuItem>
          <MenuItem>GBR</MenuItem>
          <MenuItem>USA</MenuItem>
          <MenuItem>SPN</MenuItem>
          <MenuItem>COL</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
