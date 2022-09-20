export const getData = ({ path }) => {
    const apiUrl = `https://8933-181-233-90-124.ngrok.io/${path}`;
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  