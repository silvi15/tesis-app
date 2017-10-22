import React from 'react';
import ProjectEditor from '../../components/project/ProjectEditor';
import NotFound from '../NotFound';

const EditProject = (props) => {
    return props.pro ? (
    <div className="EditProject">
        <h4 className="page-header"> Editing... "{props.pro.name}"</h4>
        <ProjectEditor {...props} />
    </div>
    ) : <NotFound />;
};
EditProject.propTypes = {
    pro: React.PropTypes.object,
};
export default EditProject;