import { assert } from 'meteor/practicalmeteor:chai';
import Skills from './skills';

describe('Skills collection', function(){
    it('registers the collection with mongo properly', function(){
        assert.equal(typeof Skills, 'Object');
    });
});