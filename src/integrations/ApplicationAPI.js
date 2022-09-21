import { ENDPOINT_BACKEND } from '../defaults/Endpoints';

const headers = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
};

class ApplicationAPI {
  static register = (searchBody) => new Promise((resolve, reject) => {
    fetch(`${ENDPOINT_BACKEND}/api/User/register`, {
      method: 'POST',
      body: JSON.stringify(searchBody),
      headers: { ...headers }
    })
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then(resolve)
            .catch(reject);
        } else {
          reject();
        }
      })
      .catch(reject);
  });

  static login = (searchBody) => new Promise((resolve, reject) => {
    fetch(`${ENDPOINT_BACKEND}/api/User/login`, {
      method: 'POST',
      body: JSON.stringify(searchBody),
      headers: { ...headers }
    })
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then(resolve)
            .catch(reject);
        } else {
          reject();
        }
      })
      .catch(reject);
  });

  static recoverPassword = ({ email }) => new Promise((resolve, reject) => {
    fetch(`${ENDPOINT_BACKEND}/api/User/SendEmailForgetPassword`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { ...headers }
    })
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then(resolve)
            .catch(reject);
        } else {
          reject();
        }
      })
      .catch(reject);
  });

  static editProfile = (searchBody) => new Promise((resolve, reject) => {
    fetch(`${ENDPOINT_BACKEND}/api/User/UpdateUser`, {
      method: 'PUT',
      body: JSON.stringify(searchBody),
      headers: { ...headers }
    })
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then(resolve)
            .catch(reject);
        } else {
          reject();
        }
      })
      .catch(reject);
  });
}

export default ApplicationAPI;
