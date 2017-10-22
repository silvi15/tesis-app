import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Skills from '../../../api/skills/skills';
import EditSkill from '../../pages/skill/EditSkill';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
    const skillId = match.params._id;
    const subcription = Meteor.subscribe('skills.view', skillId);
    
    if(subcription.ready()){
        const skl = Skills.findOne(skillId);
        onData(null, { doc });
    }
};
export default composeWithTracker(composer,Loading)(EditSkill); 