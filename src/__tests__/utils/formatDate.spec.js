import { formatDate } from '../../shared/utils/helpers';

describe('Format Date Helper Util', () => {
  it('must format current UTC date to human format with hours', () => {
    const date = 'Mon Dec 23 2019 13:21:41 GMT-0300 (Horário Padrão de Brasília)';

    expect(formatDate(date)).toEqual('1:21 PM · Dec 23, 2019');
  }); 
});