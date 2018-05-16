import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";

const Basic = props => {
  const url = `/card/${props.id}`;
  return (
    <Card>
      <Link to={url}>
        <CardMedia>
          <img src="//placeimg.com/640/300/arch" alt="" />
        </CardMedia>
      </Link>
      <CardTitle title={props.title} />
    </Card>
  );
};

export default Basic;

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
