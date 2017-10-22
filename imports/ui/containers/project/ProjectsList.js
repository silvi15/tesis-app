import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Projects from '../../../api/projects/projetcs.js';
import ProjectsList from '../../components/project/ProjectsList.js';
import Loading from '../../components/Loading.js'; 

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('projects.list');
    const user = Meteor.user();
    console.log('sus crear->crear', user) 
    if (subscription.ready()) {
      const projects = Projects.find().fetch();
      const user = Meteor.user();
      onData(null, {projects, user});
    }
  };
  
  export default composeWithTracker(composer, Loading)(ProjectsList);
  