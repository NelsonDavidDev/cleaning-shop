export function GetProducts(url) {
    return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    });
}

export function GetProductById(url, id) {
  const productUrl = url + id
  return fetch(productUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
      throw error;
    });
  
}