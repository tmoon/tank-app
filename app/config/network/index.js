import axios from 'axios';
import baseURL from './base_url';
import NavigatorService from '../../lib/NavigatorService';

const _axios = axios.create({
  baseURL: baseURL.api,
});

// _axios.interceptors.request.use(
//   (config) =>
//     // console.log(config);
//     // FIXME: Get access-token from redux
//     AsyncStorage.getItem('AccessToken').then((token) => {
//       if (token) {
//         config.headers['x-access-token'] = `Bearer ${token}`;
//       }
//       console.log(config);
//       return config;
//     }),
//   (error) => Promise.reject(error)
// );

// _axios.interceptors.response.use(
//   (response) => {
//     console.log('()()()()()()()()(res)');
//     if (response.data && !(response.data.error || response.data.isError || typeof response.data === 'string')) {
//       if ('body' in response.data) return response.data.body;

//       return response.data;
//     }
//     if (typeof response.data !== 'string' && (response.data.error || response.data.isError || response.data.code)) {
//       if (response.data.body) return Promise.reject(response.data.body);
//       return Promise.reject(response.data);
//     }
//     if (typeof response.data === 'string') {
//       console.log(response.data);
//       return Promise.reject(response.data);
//     }
//     console.log('##### Fishnet #####');
//     console.log(response.data);
//     console.log('##### Fishnet #####');
//     return response;
//   },
//   async (error) => {
//     console.log('XXXX - AJAX ERROR - XXXX');
//     console.log('FROM INTERCEPTOR ERROR:====>', error);

//     Segment.networkError(error);

//     if (error.response?.status === 403) {
//       await AsyncStorage.clear();
//       NavigatorService.navigate('auth');
//       return Promise.reject(error);
//     }
//     // errorHandler(
//     //   `CAUGHT ERROR: error occured in network response + ${JSON.stringify(
//     //     error
//     //   )}`,
//     //   "successfully failed network request"
//     // );

//     return Promise.reject(error);
//   }
// );

export default _axios;
