import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Profile extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {
            user: Meteor.users.findOne(Meteor.userId())
            }
    }
    render(){
        const {user} = this.state;
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
        return (
            <div className="container">
                    <div className="text-center">
                        <img src="/img/silvi.jpeg" className="img-circle" alt="Cinque Terre" width="80" height="80" /> 
                        <div className="name">   <label> <h2> {(user.profile.name.first).capitalize()}, {(user.profile.name.last).capitalize()} </h2> </label> </div>
                        <div className="profession"> <label><h3> {(user.profile.name.profession).capitalize()} </h3></label></div> 
                        <div className="description"> <label><h4> {user.profile.name.profiled} </h4></label> </div> 
                        <div className="skills" >
                        <h3><p><label>Skills</label></p></h3>
                        {user.profile.name.skills.map( (skill,index) => {
                            return ( <button key={index} type="button" className="btn btn-primary"> 
                                            {skill}
                                        <p><span className="glyphicon glyphicon-star-empty"></span></p>
                                    </button> 
                                    )})}  
                        </div> 
                        <div className="comments">
                         <h3><p><label>Comments</label></p></h3>
                            <img src="/img/avatar-men.jpg" className="img-circle" alt="Cinque Terre" width="30" height="30" />
                                    <div className="or">
                                        <div className="bla">
                                            <div className="bky">
                                                <small className="zc asz">12 min</small>
                                                    <h6>Jacob Thornton</h6>
                                            </div>
                                        <p>
                                            Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        </div>
                                    </div>
                        </div>
                    </div>       
                </div>
        );
    }
}

