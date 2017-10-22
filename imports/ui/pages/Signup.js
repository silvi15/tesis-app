import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Textarea } from 'react-bootstrap';
import handleSignup from '../../modules/signup';
import SkillsList from '../containers/skill/SkillsList';
const skills = [];
export default class Signup extends React.Component {
  constructor(props) {

    super(props);
    this.state={selectedSkill: []}
}  
  componentDidMount() {
    handleSignup({ component: this, skills: this.selectedSkill });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  //
  selectSkill(name) {
      skills.push(name);
      this.setState({
          selectedSkill: skills
      })
        console.log(this.state.selectedSkill);
     };

  render() {
    
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Sign Up</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>
                     <i className="fa fa-user-circle-o" aria-hidden="true"> </i>
                       First Name
                    </ControlLabel>
                    <FormControl
                      type="text"
                      ref="firstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>
                    <i className="fa fa-user-o" aria-hidden="true"> </i>
                    Last Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                
                
                  <FormGroup>
                    <ControlLabel>
                    <i className="fa fa-briefcase" aria-hidden="true"> </i>
                    Profession
                    </ControlLabel>
                    <FormControl
                      type="text"
                      ref="profession"
                      name="profession"
                      placeholder="please put proffesion"
                    />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>
                    <i className="fa fa-list" aria-hidden="true">  </i>
                      Profile 
                    </ControlLabel>
                    <FormControl
                      style={{height: '200px'}}
                      type="textarea"
                      ref="profiled"
                      name="profiled"
                      placeholder="describe your profile"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                  <ControlLabel>
                  <i className="fa fa-wrench" aria-hidden="true"> </i>
                  Skills</ControlLabel>
                  <SkillsList selectSkill={this.selectSkill.bind(this)}/> 
                  </FormGroup>
                   
                  </Col>
              </Row>
              <FormGroup>
                <ControlLabel>
                <i className="fa fa-envelope" aria-hidden="true"> </i>
                Email Address</ControlLabel>
                <FormControl
                  type="text"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                <i className="fa fa-key" aria-hidden="true"> </i>
                Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link>.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
