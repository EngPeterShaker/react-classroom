import React from "react";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


type CourseProps = {
  title?: string;
  description?: string;
};

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin : '1em',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 const CourseItem = ({ title, description }: CourseProps) => {
  const classes = useStyles();
console.log('title, description', title, description)

  return (
    <div>
       <Card className={classes.card}>

      <h3>{title}</h3>
      <p>{description}</p>
       </Card>
    </div>
  );
};

export default CourseItem;