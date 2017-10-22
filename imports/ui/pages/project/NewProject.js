import React, { PropTypes } from 'react';
import ProjectEditor from '../../components/project/ProjectEditor.js';

const NewProject = ({ history }) => (
  <div className="NewProject">
    <h4 className="page-header">New Project</h4>
    <ProjectEditor history={history} />
  </div>
);

NewProject.propTypes = {
  history: PropTypes.object,
};

export default NewProject;
