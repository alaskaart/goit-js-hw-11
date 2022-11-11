export { createMarkup };
const galleryListEl = document.querySelector('.gallery');
function createMarkup(images) {
  const markup = images
    .map(image => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
      
<div class="photo-card">
<a href="${largeImageURL}">
<img src="${webformatURL}" alt="${tags}" class="card-img" loading="lazy" />
<div class="info">
  <p class="info__item">
    <b>Likes</b>
    "${likes}" 
  </p>
  <p class="info__item">
    <b>Views</b>
    "${views}" 
  </p>
  <p class="info__item">
    <b>Comments</b>
    "${comments}" 
  </p>
  <p class="info__item">
    <b>Downloads</b>
    "${downloads}" 
  </p>
</div>
</a>
</div>
       `;
    })
    .join('');
  galleryListEl.insertAdjacentHTML('beforeend', markup);
}
