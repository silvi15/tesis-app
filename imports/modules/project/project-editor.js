import { Bert } from 'meteor/themeteorchef:bert';
import { upsertProject } from '../../api/projects/methods.js';
import '../validation.js';

let component;
const handleUpsert = () => {
    const { pro } = component.props;
    const confirmation = pro && pro._id ? 'Project updated' : 'Project added!';
    const upsert={
        name: document.querySelector('[name="name"]').value.trim(),
        desc: document.querySelector('[name="desc"]').value.trim(),
        days: document.querySelector('[name="days"]').value.trim(),
        skills: component.state.selectedSkill,
        money: document.querySelector('[name="money"]').value.trim(),
        //userowner:
        createdAt: component.state.createdAt,        
    };
    if(pro && pro._id) upsert._id = pro._id;
    upsertProject.call(upsert,(error, response) => {
        if(error){
            Bert.alert(error.reason,'danger');
        }else{
            /* projectEditorForm : es el nombre del formulario q sale en components/ProjectEditor.js */
            component.projectEditorForm.reset(); 
            Bert.alert(confirmation,'success');
            component.props.history.push(`/projects/${response.insertId || pro._id }`);
        }
    });
};
const validate = () => {
    $(component.projectEditorForm).validate({
        rules:{
            name:{
                required: true,
            },
           desc: {
              required: true,
            },
            days:{
                required: true,
            },
            skills:{
                required: true,
            },
            money:{
                required: true,
            },
        },
        messages: {
            name: {
              required: 'Need a Name in here, Please.',
            },
            desc: {
              required: 'Need a Description, Please.',
             },
            days: {
                required: 'Need to put days of Project',
            },
            skills: {
                required: 'Please select one kind of Skills',
            },
            money: {
                required: 'Please put the prices of proyect',
            },
          },
        submitHandler(){ handleUpsert(); },
    });
};

export default function projectEditor(options) {
    component = options.component;
    console.log(component);
    validate();
}