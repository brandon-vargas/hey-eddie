import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './AddCard.css'
import Button from '@material-ui/core/Button';


class AddCard extends Component {
    render(){
        return (
            <div className="FormContainer">
                <form className="Form">
                    <TextField
                        id="standard-name"
                        label="Name of Thing?"
                        // onChange={handleChange('name')}
                        margin="normal"
                        style={{width:"40%",marginLeft:"10px", marginRight:"10px"}}
                    />
                    <TextField
                        id="standard-name"
                        label="Category"
                        // onChange={handleChange('name')}
                        margin="normal"
                        style={{width:"40%",marginLeft:"10px", marginRight:"10px"}}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        margin="normal"
                        style={{width:"85%",marginLeft:"10px", marginRight:"10px"}}
                    />
                    <div className="SubmitCancelContainer">
                        <Button variant="contained" style={{margin: "10px"}}>Cancel</Button>
                        <Button variant="contained" style={{margin: "10px"}} color="primary">Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddCard