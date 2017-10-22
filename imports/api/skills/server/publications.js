import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Skills from '../skills';

// select all
Meteor.publish('skills.list', () => Skills.find())
// select by id
Meteor.publish('skill.view',(_id) => {
  check(_id, String)
  return Skills.find(_id)
})