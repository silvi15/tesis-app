import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Skills from './skills';

Meteor.methods({
    'skills.updateText'({ skillId, name }) {
      new SimpleSchema({
        skillId: { type: String },
        name: { type: String }
      }).validate({ skillId, name });
      const skill = Skills.findOne(skillId);

      Skills.update(skillId, {
        $set: { text: name }
      });
    }
  });
/*
             
export const upsertSkill = new ValidatedMethod({
    name: 'skills.upsert',
    validate : new SimpleSchema({
        _id:{ type: String, optional: true},
        name:{ type: String, optional: true},
    }).validator(),
    run(document){
    return Skills.upsert({_id: document._id}, {$set: document});
    },
});
export const removeSkill = new ValidatedMethod({
    name: 'skills.remove',
    validate: new SimpleSchema({
        _id: { type: String },
    }).validator(),
    run({ _id }) {
        Skills.remove(_id);
    },
});
rateLimit({
    methods:[
        upsertSkill,
        removeSkill,
    ],
    limit: 5,
    timeRange: 1000,
});
*/