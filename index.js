import axios from 'axios';

const makeGraphqlRequest = async (url, query, variables, headers) => {
  if (!url) {
    throw Error('Please, provide a url');
  }
  if (!query) {
    throw Error('Please, provide a GraphQL query');
  }
  let response
  try {
    response = await axios.post(url, { query, variables }, headers)
    response.data = {...response.data.data}
    delete response.data.data
  } catch (e) {
    response = e;
  }
  return response;
}

exports.default = makeGraphqlRequest;