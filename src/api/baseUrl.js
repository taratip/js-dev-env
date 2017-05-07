export default function getBaseUrl() {
  return getQueryStingParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://arcane-shelf-30097.herokuapp.com/';
}

function getQueryStingParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g," "));
}
