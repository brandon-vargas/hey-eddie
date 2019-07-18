import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: '150px',
    minHeight: '140px',
    marginTop: '10px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  console.log(props);
  const { classes } = props;
  console.log(classes)


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Category
        </Typography>
        <Typography variant="h6" component="h6">
          {props.name}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        {/* <Typography component="p">
          {props.desc}
          {{'"a benevolent smile"'}}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        BUTTONS FOR CLICKING????
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);