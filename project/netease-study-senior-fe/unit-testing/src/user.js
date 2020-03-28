import jQuery from 'jquery';

/**
 * 获取用户
 * @param {Function} callback 回调函数
 */
function getUser(callback) {
  jQuery.ajax({
    url: '/user/get',
    success: callback,
  });
}

/**
 * 异步获取用户
 */
function getUserAsync() {
  return jQuery.ajax({
    url: '/user/get',
    success: data => {
      return data;
    },
  });
}

/**
 * 获取用户
 * @param {Function} callback 回调函数
 */
function getUserByPost(callback) {
  jQuery.post('/user/get', callback);
}

export default { getUser, getUserAsync, getUserByPost };