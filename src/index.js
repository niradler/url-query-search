import 'url-search-params-polyfill';
const getParams = () => {
  const search_params = new URLSearchParams(window.location.search);
  const params = {}
  for (var i of search_params) {
    params[i[0]] = i[1]
  }
  return params;
}

const getParam = (name) => {
  const search_params = new URLSearchParams(window.location.search);
  return search_params.get(name);
}

const setParam = (name, value, i, j) => {
  const params = getParams();
  params[name] = value;
  const queryString = Object
    .keys(params)
    .map(key => key + '=' + params[key])
    .join('&');
  window
    .history
    .pushState(i, j || '', '?' + queryString);
  return params;
}

const getPathParams = (path) => {
  const path_params = window
    .location
    .pathname
    .split('/')
    .slice(1);
  let a_path = path.split('/');
  if (!a_path[0]) {
    a_path = a_path.slice(1);
  }
  const obj = {};
  for (let i = 0; i < a_path.length; i++) {
    if (a_path[i] !== '*') {
      obj[a_path[i]] = path_params[i];
    }
  }
  return obj;
}

export {getParams, getParam, setParam, getPathParams}