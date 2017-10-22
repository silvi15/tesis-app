import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import Skills from '../../../api/skills/skills';
import ViewSkill from '../../pages/skill/ViewSkill';
import Loading from '../../components/Loading';

const composer = ({ match }, onData) => {
    const skillId = match.params._id;
    const subscription = Meteor.subscribe('skills.view',skillId);
    //si la subscription esta..
    if(subscription.ready()){
        const skl = Skills.findOne(skillId);
        onData(null, { doc });
    }
};

export default composeWithTracker(composer, Loading)(ViewSkill);