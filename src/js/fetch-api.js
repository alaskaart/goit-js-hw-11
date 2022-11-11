import axios from 'axios';

export async function fetchImages(name, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '31246642-1c33390cf1ef25146f82381ba';
  const IMG_TYPE = 'image_type=photo';
  const ORIENTATION = 'orientation=horizontal';
  const SAFESEARCH = 'safesearch=true';
  const PER_PAGE = 'per_page=40';

  return await axios
    .get(
      `${BASE_URL}/?key=${KEY}&q=${name}&${IMG_TYPE}&${ORIENTATION}&${SAFESEARCH}&page=${page}&${PER_PAGE}`
    )
    .then(response => response.data);
}
