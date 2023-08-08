async function getData() {
  return fetch("/data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      const photographers = data.photographers;
      const media = data.media;
      return { photographers, media };
    });
}

export default getData;
