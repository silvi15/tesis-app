import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Projects from '../../../api/projects/projetcs.js';
import ViewProject from '../../pages/project/ViewProject.js';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
    const projectId = match.params._id;
    const subscription = Meteor.subscribe('projects.view', projectId);
    if(subscription.ready()){
        const pro = Projects.findOne(projectId);
        onData(null, { pro });
    }
};
export default composeWithTracker(composer, Loading)(ViewProject);