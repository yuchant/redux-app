import React from "react";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {},
  title: {
    fontFamily: "Playfair Display",
    textAlign: "center",
    marginTop: "15px",
    marginBottom: "20px",
    fontSize: "30px",
    padding: "0 20px"
  },
  img: {
    width: "100%"
  }
};

const Basic = props => {
  const url = `/card/${props.id}`;
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Link to={url} style={{ textDecoration: "none" }}>
        <CardMedia>
          <img className={classes.img} src={props.image.url} alt="" />
        </CardMedia>
        <Typography className={classes.title} component="h2">
          {props.title}
        </Typography>
      </Link>
    </Card>
  );
};

export default withStyles(styles)(Basic);

// <Card>
//   <CardHeader
//     title="URL Avatar"
//     subtitle="Subtitle"
//     avatar="images/jsa-128.jpg"
//   />
//   <CardMedia
//     overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//   >
//     <img src="images/nature-600-337.jpg" alt="" />
//   </CardMedia>
//   <CardTitle title="Card title" subtitle="Card subtitle" />
//   <CardText>{props.text}</CardText>
//   <CardActions>
//     <FlatButton label="Action1" />
//     <FlatButton label="Action2" />
//   </CardActions>
// </Card>
