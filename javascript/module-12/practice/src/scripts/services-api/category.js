import axios from 'axios';
import { ENDPOINTS } from './config';
import { onFetchError } from '../helpres/errorHepler';

export async function fetchCategories() {
  try {
    const { data } = await axios.get(ENDPOINTS.categories);
    return [{ _id: 'all', name: 'Всі товари' }, ...data];
  } catch (error) {
    onFetchError(error);
  }
}
