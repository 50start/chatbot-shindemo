import React from 'react';
import TextField from '@material-ui/core/TextField';

const　TextInput = (props) => {
  return(
    <TextField 
    fullWidth={true}
     label={props.label}
     margin ={"dense"}
     multiline={props.multiline}
     rows={props.rows}
     value={props.value}
     tvpe={props.type}
     onChange={props.onChange}
    />
     
    
  )
}

export default TextInput