import axios from 'axios';

import * as gallery from './render-functions';

export function getImagesByQuery(query) {
  gallery.showLoader();
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '49849891-12ae0f2235913a172a6db425e',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
