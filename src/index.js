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
  
  const setParam = (name,value,i,j) => {
    const params = getParams();
    params[name] = value;
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    window.history.pushState(i, j || '', '?' + queryString);
    return params;
  }
export {
    getParams,
    getParam,
    setParam
}