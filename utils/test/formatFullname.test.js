const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return error if arg is not exist or arg is not a string', () => {
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(7)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return error if arg is not in <firstName> <lastName> format', () => {
    expect(formatFullname('JohnDoe')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John ')).to.equal('Error');
    expect(formatFullname('John Doe JohnDoe')).to.equal('Error');
  });

  it('should return proper string if arg is ok', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOhN dOe')).to.equal('John Doe');
  });
});