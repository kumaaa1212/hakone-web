import { createClient } from 'microcms-js-sdk';
export const client = createClient({
  serviceDomain: 'hakone',
  apiKey:process.env.API_KEY,
});
