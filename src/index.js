import { fetchImages } from './js/fetch-api';
import { createMarkup } from './js/markup';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const loadMoreEl = document.querySelector('.load-more');

searchFormEl.addEventListener('submit', onSearchForm);
loadMoreEl.addEventListener('click', onLoadMore);

let hits = 0;
let page = 1;
let searchQuery = '';
const simpleBox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionData: 'alt',
});

async function onSearchForm(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.searchQuery.value.trim();
  page = 1;

  if (!searchQuery) {
    return;
  }

  const data = await fetchImages(searchQuery, page);
  hits = data.hits.length;

  if (data.totalHits > 40) {
    loadMoreEl.classList.remove('is-hidden');
  } else {
    loadMoreEl.classList.add('is-hidden');
  }

  try {
    if (data.totalHits > 0) {
      totalImg(data);
      galleryEl.innerHTML = '';
      createMarkup(data.hits);
      simpleBox.refresh();
    }

    if (data.totalHits === 0) {
      galleryEl.innerHTML = '';
      noImage();
      loadMoreEl.classList.add('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMore() {
  page += 1;
  const data = await fetchImages(searchQuery, page);
  createMarkup(data.hits);
  hits += data.hits.length;

  if (hits === data.totalHits) {
    loadMoreEl.classList.add('is-hidden');
  }
}

function noImage() {
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function totalImg(data) {
  Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
}
