import axios from 'axios';

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

export const ENDPOINTS = {
  furniture: '/furnitures',
  categories: '/categories',
  orders: '/orders',
  feddback: '/feedbacks',
};
