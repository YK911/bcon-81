import axios from 'axios';
import { ENDPOINTS } from './config';
import { onFetchError } from '../helpres/errorHepler';

export async function fetchProducts(id) {
  const params = new Map([
    ['sortDirect', 'asc'],
    ['sortName', 'name'],
    ['type', 'popular'],
    ['page', 1],
    ['limit', 8],
  ]);

  if (id !== 'all') {
    params.set('category', id);
  }

  try {
    const { data } = await axios({
      method: 'get',
      url: ENDPOINTS.furniture,
      params: Object.fromEntries(params),
    });

    return data;
  } catch (error) {
    onFetchError(error);
  }
}
