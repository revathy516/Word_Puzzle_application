import React from 'react';
import renderer from 'react-test-renderer';
import LeaderBoard from '../screens/LeaderBoard';

it('renders correctly', () => {
    const tree = renderer.create(<LeaderBoard />).toJSON();
    expect(tree).toMatchSnapshot();
  });