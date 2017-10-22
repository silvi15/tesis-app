import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

const Projects = new Mongo.Collection('Projects');
export default Projects;

Projects.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});
Projects.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});
Projects.schema = new SimpleSchema({
    name: {
        type: String,
        label: 'The Title of Project'
    },
    desc: {
        type: String,
        label: 'Description of project',
    },
    days:{
        type: String,
        label: 'Quantity of days',
    },
    money: {
        type: String,
        label: 'Price of project',
    },
    skills:{
        type: [String],
        label: 'skills',
    },
    createdAt: {
        type: Date,
        label: 'createdAt',
        },
    //userowner: {
      //  type: [String],
        //label: 'userowner',
    //} 
    /*userworker: {
        type: [String],
        label: 'User who works in project'
    },*/
    /*startDate:{
        type: Date,
        label: 'when project start',
    },
    state:{
        type: [String],
        label: 'state of prorject - red - yellow - green ',
    },
    */
});
Projects.attachSchema(Projects.schema);