import React from 'react';
import SkillEditor from '../../components/skill/SkillEditor';
import NotFound from '../NotFound';

const EditSkill = (props) => {
    return props.skl ? (
        <div className="EditSkill">
            <h4 className="page-header">Editing"{props.skl.name}"</h4>
            <SkillEditor {...props} />
        </div>
    ) : <NotFound />;
};
EditSkill.propTypes = {
    skl: React.PropTypes.object,
};
export default EditSkill;