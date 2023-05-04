// async (ES2017)
// a play between two older js features: promises and generators(ES2016)
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
