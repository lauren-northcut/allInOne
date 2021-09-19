import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SimpleCard = (props)=>{
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
    <Grid item xs>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
   </Grid>
    )
}


export default SimpleCard;