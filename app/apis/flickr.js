import qs from 'qs';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://www.flickr.com/services/feeds/photos_public.gne';

const getImages = tag => {
  const query = qs.stringify(
    { format: 'json', nojsoncallback: 1, tags: tag },
    { skipNulls: true },
  );
  return fetch(`${proxyurl}${url}?${query}`).then(resp => resp.json());
};

export { getImages };
