import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../../api/documents/documents'
import DocumentsList from '../../components/document/DocumentsList';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  const user = Meteor.user();
  console.log('suscrip crear-> DOCUMENTO',user);
  if (subscription.ready()) {
    const documents = Documents.find().fetch();
    onData(null, { documents, user });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
