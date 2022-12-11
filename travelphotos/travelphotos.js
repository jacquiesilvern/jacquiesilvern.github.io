const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

/* Declaring the array of image filenames */

const images = [ 'belize.png', 'monkey.png', 'prbeach.png', 'costaricasunset.png', 'prtrees.png'];
const alts = {
  'belize.png' : 'Sunset in Belize',
  'monkey.png' : 'Monkey in Costa Rica',
  'prbeach.png' : 'Beach in Puerto Rico',
  'costaricasunset.png' : 'Sunset in Costa Rica',
  'prtrees.png' : 'Trees in Puerto Rico'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}
