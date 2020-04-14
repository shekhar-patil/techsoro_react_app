let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'techsoro.com') {
  backendHost = 'http://techsoro.herokuapp.com';
} else if(hostname === 'staging.realsite.com') {
  backendHost = 'https://staging.api.realsite.com';
} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost = 'http://localhost:3000' || process.env.REACT_APP_BACKEND_HOST;
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;
