// cherche une donnée dans l'url

function getUrlData(data) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlData = urlParams.get(data);
  return urlData;
}

export default getUrlData;
