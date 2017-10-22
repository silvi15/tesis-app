/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Skills from './skills.js';
import { upsertSkill, removeSkill } from './methods.js';

describe('Skills methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a skill into the Skills collection', function () {
    upsertSkill.call({
      name: 'C',
    });

    const getSkill = Skills.findOne({ name: 'c' });
    assert.equal(getSkill.name, 'c');
  });

  it('updates a skill in the Skills collection', function () {
    const { _id } = Factory.create('skill');

    upsertSkill.call({
      _id,
      name: 'c',
    });

    const getSkill = Skills.findOne(_id);
    assert.equal(getSkill.name, 'c');
  });

  it('removes a skill from the Skills collection', function () {
    const { _id } = Factory.create('skill');
    removeSkill.call({ _id });
    const getSkill = Skills.findOne(_id);
    assert.equal(getSkill, undefined);
  });
});
