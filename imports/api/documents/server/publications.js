import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';
// crea las publicaciones para el list
Meteor.publish('documents.list', () => Documents.find());
// crea las publicaciones para el view
Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});
