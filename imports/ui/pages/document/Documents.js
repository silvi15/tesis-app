import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../../containers/document/DocumentsList';

const Documents = ({ history }) => (
<div className="Documents"> 

    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
         <div className="container"> <h2 className="pull-left">Project</h2> </div>
          <Link to="/documents/new">
            <Button className="btn btn-primary">
            New Project</Button>
          </Link>
        </div>
        <DocumentsList history={history} />
      </Col>
    </Row>

  </div>
);

Documents.propTypes = {
  history: PropTypes.object,
};

export default Documents;
