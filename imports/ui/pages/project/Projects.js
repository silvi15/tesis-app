import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import ProjectsList from '../../containers/project/ProjectsList.js';

const Projects = ({ history }) => (
    <div className="Projects">  
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h2 className="pull-left"> {/* Project*/}</h2> </div>
              <Link to="/projects/new">
                <Button className="btn btn-primary">
                New Project</Button>
              </Link>
            </div>
            <ProjectsList history={history} />
          </Col>
        </Row>
    
      </div>
    );
    
    Projects.propTypes = {
      history: PropTypes.object,
    };
    
export default Projects;
    