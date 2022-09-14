import { DEFAULT_ENVIRONMENT } from '../defaults/Endpoints';

const headers = {
  'Content-type': 'application/json'
};

class ApplicationAPI {
  static register = (searchBody) => new Promise((resolve, reject) => {
    fetch(`${DEFAULT_ENVIRONMENT}/api/User/register`, {
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
    fetch(`${DEFAULT_ENVIRONMENT}/api/User/login`, {
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
    fetch(`${DEFAULT_ENVIRONMENT}/api/User/SendEmailForgetPassword`, {
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
    fetch(`${DEFAULT_ENVIRONMENT}/api/User/UpdateUser`, {
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
