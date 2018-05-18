// we use a aws lambda function simple proxy
// https://8nt7c39xzf.execute-api.us-east-2.amazonaws.com/dev/?url=<FQDN>

const proxyPrefix =
  "https://8nt7c39xzf.execute-api.us-east-2.amazonaws.com/dev/?url=";

const getProxyUrl = url => {
  return proxyPrefix + url;
};

export default getProxyUrl;
