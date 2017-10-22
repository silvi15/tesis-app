import React, {PropTypes} from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

const handleNav = (history, _id) => {
    history.push(`/projects/${_id}`);
};

const ProjectsList = ({ history, projects }) => (
    projects.length > 0 ? <ListGroup className="ProjectsList">
        {projects.map(({_id, name, money}) => (
            <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id ) }>
            <i><span className="fa fa-id-card-o" aria-hidden="true"> </span>  { name } </i> 
            <i><span className="fa fa-money" aria-hidden="true"> </span> {money} </i>
            <i><span className="fa fa-search-plus" aria-hidden="true" margin={""}> </span>  </i>
            </ListGroupItem>
        ))}
        </ListGroup> :
        <Alert bsStyle="warning"> No Projects yet. </Alert>
);
ProjectsList.propTypes = {
    history: PropTypes.object,
    projects: PropTypes.array,
};
export default ProjectsList;