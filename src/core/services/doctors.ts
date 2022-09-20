import { httpGet } from './http';

export const get = async query => httpGet(query, 'doctors')