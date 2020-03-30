const delay = require('webpack-api-mocker/utils/delay');
const proxy = {
  "GET /user/get": {
    user: {
      name: '小明',
    },
  },
  "POST /user/get": {
    user: {
      name: '小明',
    },
  },
};

module.exports = delay(proxy, 100);