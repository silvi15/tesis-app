import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../../api/documents/documents';
import EditDocument from '../../pages/document/EditDocument';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const documentId = match.params._id;
  const user = Meteor.user();
  const subscription = Meteor.subscribe('documents.view', documentId);
  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, { doc, user });
  }
};

export default composeWithTracker(composer, Loading)(EditDocument);
