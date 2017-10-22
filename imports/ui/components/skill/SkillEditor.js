/* eslint-disable max-len, no-return-assign */
import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import skillEditor from '../../../modules/skill/skill-editor';

export default class SkillEditor extends React.Component {
  componentDidMount() {
    skillEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    const { skl } = this.props;
    return (<form
      ref={ form => (this.skillEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Name</ControlLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={ skl && skl.name }
          placeholder="Please add new skill"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { skl && skl._id ? 'Save Changes' : 'Add Skill' }
      </Button>
    </form>);
  }
}

SkillEditor.propTypes = {
  skl: PropTypes.object,
};
