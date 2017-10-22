import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Skills from '../../../api/skills/skills';
import SkillsList from '../../components/skill/SkillsList';
import Loading from '../../components/Loading.js'; 

// es la suscripcion del lado del cliente para traer toda la coleccion publicada del lado del server
const composer = (props, onData) => {
    const subscription = Meteor.subscribe('skills.list');
    if (subscription.ready()) {
      const skills = Skills.find().fetch();
      onData(null, { skills });
    }
  };
  
  export default composeWithTracker(composer, Loading)(SkillsList);
  