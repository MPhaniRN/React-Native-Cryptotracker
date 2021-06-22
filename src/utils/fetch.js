import {endpointReference} from 'src/config/api'
/**
 * Get method
 * @param url
 * @param options
 * @return {Promise<R>}
 */
const get = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(endpointReference[url], {
      ...options,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
          resolve(data);
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  });
};



export default {
  get,
 
};
