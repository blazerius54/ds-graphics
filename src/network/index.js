import { API_BASE_URL } from './config';

export const getSummuryData = () =>
  fetch(`${API_BASE_URL}/summary`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      period: 0,
      date: '2018-02-15T09:02:23.859Z',
    }),
  });
