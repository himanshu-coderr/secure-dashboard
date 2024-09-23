// src/store/authSlice.test.ts
import authReducer, { login } from '../features/authSlice';

describe('auth reducer', () => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
  };

  it('should handle login success', () => {
    const user = 'testuser@example.com';
    const action = login(user);
    const newState = authReducer(initialState, action);
    expect(newState.isAuthenticated).toBe(true);
    expect(newState.user).toBe(user);
  });
});
