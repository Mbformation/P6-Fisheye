// cherche des données json
async function getFromJson(path) {
  const response = await fetch(path);
  const data = await response.json();
  return data;
}

export default getFromJson;
