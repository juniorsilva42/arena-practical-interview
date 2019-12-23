import React from 'react';
import { shallow } from 'enzyme';

import PullRequestCard from '../../../shared/components/PullRequestCard';

describe('PullRequestCard Component', () => {
  it('should render a Pull Request Card correctly', () => {
    const wrapper = shallow(
      <PullRequestCard
        id={1}
        title="pull request title"
        number={5422}
        user={{ login: 'jsiilva1', avatar_url: null }}
        date={"Mon Dec 23 2019 13:16:40 GMT-0300 (Horário Padrão de Brasília)"}
        link={"null"}
        body={"content of pull request"}
        state={'open'}
      />,
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});
