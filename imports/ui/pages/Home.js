import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Home extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        user: Meteor.users.findOne(Meteor.userId())
    }
}
render(){
    return (
        <div className="Inbox">
        
        <div className="workin">
            <h4>Work in</h4>
            <div className="rp bra brb agk">
                <div className="rq">
                    <ul className="dc ayn">
                        <li> <span className="glyphicon glyphicon-list-alt"> </span> <a href="#"> Name: </a> <label> E-commerce </label> </li>
                        <li> <span className="glyphicon glyphicon-user"> </span> <a href="#"> From </a> <label> @Jhon </label> </li> 
                        <li> <span className="glyphicon glyphicon-calendar"> </span> <a href="#"> Start</a> <label> 15/08/2017 </label> </li>
                        <li> <span className="glyphicon glyphicon-calendar"> </span> Finished <a href="#"></a> <label> 25/08/2017 </label> </li>
                        <li> <span className="glyphicon glyphicon-record "></span> State <a href="#"> </a> <label> working </label> </li>
                    </ul>
                </div>
            </div>            
        </div>
        <div className="people-work-in-my-project">
            <h4>People Work in My Project</h4>
            <div className="rp bra brb agk">
                <div className="rp bra brb agk">
                    <div className="rq">
                        <ul className="dc ayn">
                            <li> <span className="glyphicon glyphicon-list-alt"> </span> <a href="#"> Name </a> <label> Blog </label> </li>
                            <li> <span className="glyphicon glyphicon-user"> </span> <a href="#"> User </a> <label>  @peter </label> </li>
                            <li> <span className="glyphicon glyphicon-calendar"> </span> <a href="#"> Start</a> <label> 25/08/2017 </label> </li>
                            <li> <span className="glyphicon glyphicon-calendar"> </span> Finished <a href="#"> </a> <label> 10/09/2017 </label> </li>
                            <li> <span className="glyphicon glyphicon-record "></span> State <a href="#"> </a> <label> working </label> </li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>        
        </div>
    );
}
}
