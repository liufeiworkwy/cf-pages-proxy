export default {
  async fetch(request, env) {
    let url = new URL(request.url);  
    if (url.pathname.startsWith('/telegraph/')) {
          url.hostname = 'telegra.ph';
          url.pathname = url.pathname.replace("/telegraph/","");
      }else if(url.pathname.startsWith('/telegraph-api/')){
          url.hostname = 'api.telegra.ph';
          url.pathname = url.pathname.replace("/telegraph-api/","");
      }
      let new_request = new Request(url, request);
      return fetch(new_request);
  },
};
