const fetchAndParseToJson = async (url: string) => {
  return await (await fetch(url)).json();
};

const fetchUtils = { fetchAndParseToJson };

export default fetchUtils;
