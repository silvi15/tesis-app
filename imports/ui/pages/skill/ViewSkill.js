import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeSkill } from '../../../api/skills/methods';
import NotFound from '../NotFound';

const handleEdit = (history, _id) => {
    history.push(`/skills/${_id}/edit`);
};
const handleRemove = (history, _id) => {
  if(confirm('Are you sure? this is permanent')){
      removeSkill.call({_id},(error) =>{
        if(error){
            Bert.alert(error.reason,'danger'); 
        } else{
            Bert.alert('Skill deleted!','success');
            history.push('/skills');
        }
      });
    }
};
const ViewSkill = ({skl,history}) => {
    return skl ? ( 
    <div className="ViewSkill">
        <div className="page-header clearfix">
        <h4 className="pull-left">{skl && skl.name }</h4>
            <ButtonToolbar className="pull-right">
            <ButtonGroup bsSize="small">
                <Button 
                onClick={() => handleEdit(history, skl._id)}
                >Edit</Button>
                <Button 
                onClick={() => handleEdit(history, skl._id)}
                >Delete</Button>
            </ButtonGroup>
            </ButtonToolbar>
        </div>
        { skl && skl.name }
    </div>
    ) : <NotFound />;
};
ViewSkill.propTypes = {
    skl: PropTypes.object,
    history: PropTypes.object,
};
export default ViewSkill;