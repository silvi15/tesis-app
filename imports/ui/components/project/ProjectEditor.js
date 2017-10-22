import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import projectEditor from '../../../modules/project/project-editor.js';
import SkillsList from '../../containers/skill/SkillsList.js';

const skills = [];
export default class ProjectEditor extends React.Component{
    constructor(props){
        super(props);
        this.state={
          selectedSkill: [],
          createdAt: new Date(),
        }
        console.log('hola',this.props);
    }
    
    componentDidMount(){
        projectEditor({ component: this });
        setTimeout(() => { document.querySelector('[name="name"]').focus(); },0); 
    }
    selectSkill(name) {
        skills.push(name);
        this.setState({
            selectedSkill: skills
        })
          console.log(this.state.selectedSkill);
       };
    render() {
        const { pro } = this.props;
        return (<form
          ref={ form => (this.projectEditorForm = form) }
          onSubmit={ event => event.preventDefault() }
        >
          <FormGroup>
            <ControlLabel>
            <i><span className="fa fa-id-card-o" aria-hidden="true"> </span> </i> 
            Name 
            </ControlLabel>
            <FormControl
              type="text"
              name="name"
              defaultValue={ pro && pro.name }
              placeholder="Name of Project!"
            />
          </FormGroup>
          <FormGroup>
          <ControlLabel>
          <i><span className="fa fa-list " aria-hidden="true"></span> </i>
          Description</ControlLabel>
          <FormControl
          componentClass="textarea"
          name="desc"
          defaultValue={ pro && pro.desc }
          placeholder="Please, describe your Proyect"
          />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
            <i><span className="fa fa-calendar" aria-hidden="true"></span> </i>
            Days
            </ControlLabel>
            <FormControl
              type="text"
              name="days"
              defaultValue={ pro && pro.days }
              placeholder="days of project!"
            />
          </FormGroup>
          <FormGroup>
          <ControlLabel>
          <i><span  className="fa fa-wrench " aria-hidden="true"></span> </i>
            Skills</ControlLabel>
          <SkillsList selectSkill={this.selectSkill.bind(this)}/> 
          </FormGroup>

          <FormGroup>
            <ControlLabel>
            <i> <span className="fa fa-money" aria-hidden="true"></span> </i>
            Money
            </ControlLabel>
            <FormControl
              type="text"
              name="money"
              defaultValue={ pro && pro.money }
              placeholder="Price to finish the proyect!"
            />
          </FormGroup>   
          <Button type="submit" bsStyle="success">
            { pro && pro._id ? 'Save Changes' : 'Add Project' }
          </Button>
        </form>);
      }
    }
    
    ProjectEditor.propTypes = {
      pro: PropTypes.object,
    };
    