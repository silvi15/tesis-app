import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

/* public */ 
import Public from '../pages/Public';
/* Private */
import Authenticated from '../pages/Authenticated';
import AppNavigation from '../components/AppNavigation';
import Index from '../pages/Index';

/*Document */
import Documents from '../pages/document/Documents';
import NewDocument from '../pages/document/NewDocument';
import EditDocument from '../containers/document/EditDocument';
import ViewDocument from '../containers/document/ViewDocument';

/* proyect */
import Projects from '../pages/project/Projects';
import NewProject from '../pages/project/NewProject';
import EditProject from '../containers/project/EditProject';
import ViewProject from '../containers/project/ViewProject';

/* skill */
import Skills from '../pages/skill/Skills';
//import NewSkill from '../pages/NewSkill';
//import EditSkill from '../containers/EditSkill';
//import ViewSkill from '../containers/ViewSkill';

//Login
import Login from '../pages/Login';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
//Pages
import Home from '../pages/Home';
import Inbox from '../pages/Inbox';
import FindPeople from '../pages/FindPeople';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

const App = appProps => (
  <Router>
    <div className="App">
      <AppNavigation {...appProps} />
      <Grid>
        <Switch>
          <Route exact name="index" path="/" component={Index} />
          
          <Authenticated exact path="/projects" component = { Projects } {...appProps } />
          <Authenticated exact path="/projects/new" component={NewProject} {...appProps} />
          <Authenticated exact path="/projects/:_id" component = { ViewProject } {...appProps } />
          <Authenticated exact path="/projects/:_id/edit" component = { EditProject } {...appProps } />

          <Authenticated exact path="/documents" component={Documents} {...appProps} />
          <Authenticated exact path="/documents/new" component={NewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id" component={ViewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id/edit" component={EditDocument} {...appProps} />

          <Authenticated exact path="/skills" component={Skills} {...appProps} />
{/*          <Authenticated exact path="/skills/new" component={NewSkill} {...appProps} />
          <Authenticated exact path="/skills/:_id" component={ViewSkill} {...appProps} />
          <Authenticated exact path="/skills/:_id/edit" component={EditSkill} {...appProps} />
*/}          
          <Authenticated exact path="/home" component = { Home } {...appProps} />
          <Authenticated exact path="/inbox" component = { Inbox } {...appProps} />
          <Authenticated exact path="/findPeople" component = { FindPeople } {...appProps}  />          
          <Authenticated exact path="/notification" component = { Notification } {...appProps } />
          <Authenticated exact path="/profile" component = { Profile } {...appProps} />
          
          <Public path="/signup" component={Signup} {...appProps} />
          <Public path="/login" component={Login} {...appProps} />
          <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
          <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
};
//para tener acceso a las rutas autenticadas 
const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default composeWithTracker(composer)(App);
