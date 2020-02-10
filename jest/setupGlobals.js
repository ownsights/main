MockedReq = function() {

  return this;
};

MockRes = function() {
  this.send = jest.fn();

  return this;
};
