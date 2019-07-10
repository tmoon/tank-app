import ENV from '../env';

const baseURLs = {
  DEV: {
    api: '',
  },
  STAGING: {
    api: '',
  },
  PRODUCTION: {
    api: '',
  },
};

export default baseURLs[ENV];
