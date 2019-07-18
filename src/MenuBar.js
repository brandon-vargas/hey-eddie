import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './MenuBar.css';

//TODO: after user hits enter in modal, call an api that validates the key

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#3f51b5",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#003366',
        },
    }
});

//TODO: should i make the below function its own class?
function MenuBar(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  //TODO: if the submit button was hit, make sure to save it to the state
  //TODO: are there any security flaws with the above todo? 

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    //TODO: clear the state 
    setOpen(false);
  }

  const verify = event => {
    //TODO: save this text to a state
    console.log(event.target.value)
  }

  return (
    <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="static"  >
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Hey Eddie?
                    </Typography>
                    <Button color="inherit" onClick={handleClickOpen}>Login</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title" style={{textAlign: "center"}} >Welcome Friends!</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            To edit our awesome website, please enter your super secret key. ;)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Secret Key"
                            type="text"
                            fullWidth
                            onChange={verify}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Submit
                        </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </div>
    </MuiThemeProvider>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);