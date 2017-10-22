import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Projects from './projetcs';
import rateLimit from '../../modules/rate-limit';

export const upsertProject = new ValidatedMethod({
    name:'projects.upsert',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        name:{type: String, optional: true},
        desc:{ type: String, optional: true},
        skills:{type: [String]},
        days:{ type: String, optional: true},
        money:{ type: String, optional: true },
        createdAt:{type: Date},
        //userowner:{ type: [String]}, // aca iria el usuario q lo creo
        // startDate:{type: Date},
       // state:{type: String},
    }).validator(),
    run(document) {
        return Projects.upsert({_id: document._id},{ $set: document });
    },    
});
/* eliminar una suscripcion a la publicacion */
export const removeProject = new ValidatedMethod({
    name: 'projects.remove',
    validate: new SimpleSchema({
      _id: { type: String },
    }).validator(),
    run({ _id }) {
      Projects.remove(_id);
    },
  });
  
rateLimit({
    methods: [
      upsertProject,
      removeProject,
    ],
    limit: 5,
    timeRange: 1000,
  });
  
