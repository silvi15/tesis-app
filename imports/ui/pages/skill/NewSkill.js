import React, {PropType} from 'react';
import SkillEditor from '../../components/skill/SkillEditor';

const NewSkill = ({ history }) => (
    <div className="NewSkill">
        <h4 className="page-header"> New Skill </h4>
        <SkillEditor history={history} />
    </div>
);
NewSkill.propType = {
    history: PropType.object,
};
export default NewSkill;