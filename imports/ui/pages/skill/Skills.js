import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import SkillsList from '../../containers/skill/SkillsList';

const Skills = () => (
    <div className="Skills">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Skills</h4>
          <Link to="/skills/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Skill</Button>
          </Link>
        </div>
        <SkillsList />
      </Col>
    </Row>
    </div>
);
export default Skills;