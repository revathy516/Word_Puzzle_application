import React from 'react';
import renderer from 'react-test-renderer';
import Quiz from '../screens/Quiz';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

it('renders correctly', () => {
    const tree = renderer.create(<Quiz />).toJSON();
    expect(tree).toMatchSnapshot();
  });