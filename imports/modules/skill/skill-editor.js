/* eslint-disable no-undef */

import { Bert } from 'meteor/themeteorchef:bert';
import { upsertSkill } from '../../api/skills/methods'; 
import './validation.js';

let component;

const handleUpsert = () => {
  const { skl } = component.props;
  const confirmation = skl && skl._id ? 'skill updated!' : 'Skill added!';
  const upsert = {
    name: document.querySelector('[name="name"]').value.trim(),
  };

  if (skl && skl._id) upsert._id = skl._id;

  upsertSkill.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.skillEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/skills/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.skillEditorForm).validate({
    rules: {
      name: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Need a name in here, Seuss.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function skillEditor(options) {
  component = options.component;
  validate();
}
