const controller = require('../version.index');

describe('controller: version.index', () => {
  it('should respond with package version', async() => {
    const res = new MockRes();

    await controller(new MockedReq(), res);

    expect(res.send).toHaveBeenCalled();
    const [body] = res.send.mock.calls[0];
    const { version } = body;

    const parts = version.split('.');
    expect(parts.length).toBe(3);
  });
});
