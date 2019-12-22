import { doRequest, parseRequest } from '../../shared/utils/requestHandler';

describe('Request Handler Helper Util', () => {
  it('should make a request in the github api and return at least one result', () => {
    doRequest({
      method: 'GET',
      endpoint: 'users/jsiilva1/repos',
    })
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });

  it('should make a request and parse status with the parseRequest function', () => {
    doRequest({
      method: 'GET',
      endpoint: 'users/jsiilva1/repos',
    })
      .then((response) => {
        const parse = parseRequest(response);
        expect(parse.status).toEqual(200);
      });
  });  
});