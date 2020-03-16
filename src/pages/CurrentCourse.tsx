import React ,{FC,} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import CourseItem from "../components/CourseItem";
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface Props {
  name?: string;
  priority?: boolean
}

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}


const CurrentCourse : FC<Props> = () => {
  return (
    <div>
      <CourseItem title="React Course " description="In this course I'll teach you how to master React Techiques " />
      <ProgressBar now={60} label={`60%`} />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="React Hooks" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="React Material UI " />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="React Router Dom" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="TypeScript" />
        </ListItemLink>
      </List>
    </div>
  )
}

export default CurrentCourse
