export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/telegraph/')) {
          url.hostname = 'telegra.ph';
      }else if(url.pathname.startsWith('/telegraph-api/')){
          url.hostname = 'api.telegra.ph';
      }
      let new_request = new Request(url, request);
      return fetch(new_request);
  },
};
