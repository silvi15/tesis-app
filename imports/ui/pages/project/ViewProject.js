import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeProject } from '../../../api/projects/methods';
import NotFound from '../NotFound';
import SkillsList from '../../components/skill/SkillsList.js';


const handleEdit =(history, _id) => {
    history.push(`/projects/${_id}/edit`);
};
const handleRemove = (history,_id) => {
    if(confirm('R U Sure? this is permanent')){
        removeProject.call({_id},(error) => {
            if(error){
                Bert.alert(error.reason,'danger');
            }else {
                Bert.alert('Project deleted','success');
                history.push('/projects');
            }
        });
    }
};

const ViewProject = ({ pro, history }) => {
    return pro ? (
        <div className="ViewProject">
            <div className="page-header clearfix">
                <h4 className="pull-left">{ /* pro && pro.name */}</h4>
                <ButtonToolbar className="pull-right">
                    <ButtonGroup bsSize="big">
                    <Button
                        onClick={() => handlePostulate(history, pro._id)}
                        >
                        <i className="fa fa-pencil-square-o" aria-hidden="true">Postulate</i>
                        </Button>
                        {/*
                        <Button
                        onClick={() => handleEdit(history, pro._id)}
                        >
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </Button>
                        
                        <Button
                        onClick={() => handleRemove(history, pro._id)}
                        className="text-danger">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                        */}
                    </ButtonGroup>
                </ButtonToolbar>
        
            <div className="rp bra brb agk">
                <div className="rq">
                    <ul className="dc ayn">
                        <li> <span className="fa fa-id-card-o"> </span> <a href="#"> Name: </a> <label> {pro && pro.name}  </label> </li>
                        <li> <span className="fa fa-list"> </span> <a href="#"> Description: </a>  {pro && pro.desc} </li> 
                        <li> <span className="fa fa-calendar"> </span> <a href="#"> Days: </a> <label> {pro && pro.days} </label> </li>
                        <li> <span className="fa fa-wrench"> </span> <a href="#"> Skills: </a> {pro && pro.skills }   </li>
                        <li> <span className="fa fa-money"></span>  <a href="#"> Money: </a> <label> u$s {pro && pro.money} </label> </li>
                        <li> <span className="fa fa-user-o"></span> <a href="#"> UserWorker:</a> <label> </label> </li>
                        <li> <span className="fa fa-users"></span> <a href="#"> UserWorker:</a> <label> </label> </li>
                        <li> <span className="fa fa-circle-o-notch"></span> <a href="#"> State: </a> <label> Working </label> </li>
                    </ul>
                </div>
            </div>            
        </div>
        </div>
    ): <NotFound />;
};

ViewProject.proTypes = {
    pro: PropTypes.object,
    history: PropTypes.object,
};

export default ViewProject;