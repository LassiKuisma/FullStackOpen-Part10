import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import { SignInContainer } from './SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(
        screen.getByPlaceholderText('Username'),
        'Uuno User'
      );
      fireEvent.changeText(
        screen.getByPlaceholderText('Password'),
        'pretty password'
      );
      fireEvent.press(screen.getByText('Login'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'Uuno User',
          password: 'pretty password',
        });
      });
    });
  });
});
