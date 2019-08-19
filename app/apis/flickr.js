const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url =
  'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';

const getImages = () => fetch(proxyurl + url).then(resp => resp.json());

export { getImages };
