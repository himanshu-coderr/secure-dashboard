// src/services/authService.test.ts
import axios from 'axios';
import { login } from '../services/httpService';

jest.mock('axios');

describe('Auth Service', () => {
  it('should call login API and return token on success', async () => {
    const mockResponse = { token: '12345' };
    (axios.post as jest.Mock).mockResolvedValue({ data: mockResponse });

    const result = await login('eve.holt@reqres.in', 'password');
    expect(result).toBe('QpwL5tke4Pnpja7X4');
    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'password',
    });
  });

  it('should throw error if login fails', async () => {
    (axios.post as jest.Mock).mockRejectedValue(new Error('Login failed'));

    await expect(login('wrong.email', 'wrongpassword')).rejects.toThrow('Login failed');
  });
});
