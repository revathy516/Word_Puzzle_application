import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import UserFormScreen from '../screens/UserFormScreen';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('fills in the form and goToQuiz is called', async () => {
  const firstName = 'revathy';
  const lastName = 'gowtham';
  const nickname='nicky'
  const age='28'
  // Create a mock function to pass as onSubmit prop
  const handleSubmit = jest.fn();
  // Render the component
  render(<UserFormScreen onSubmit={handleSubmit} />);

  // Fill in the form and submit it
  await fireEvent.changeText(
    screen.getByPlaceholderText(/firstName/i),
    username,
  );
  await fireEvent.changeText(
    screen.getByPlaceholderText(/lastName/i),
    lastName,
  );
  fireEvent.press(screen.getByText(/citis/i));
  fireEvent.press(screen.getByText(/Foods/i));
  fireEvent.press(screen.getByText(/Animals/i));

  const tree = renderer.create(<UserFormScreen />).toJSON();
  expect(tree).toMatchSnapshot();
  // Verify that handleSubmit was called with the correct arguments and only once
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});