import axios from 'axios';

export async function fetchImages(name, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '31246642-1c33390cf1ef25146f82381ba';
  const IMG_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SAFESEARCH = 'true';
  const PER_PAGE = '40';

  return await axios
    .get(
      `${BASE_URL}/?key=${KEY}&q=${name}&image_type=${IMG_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${PER_PAGE}`
    )
    .then(response => response.data);
}
