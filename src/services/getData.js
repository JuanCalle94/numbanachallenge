const apiUrl = `https://8933-181-233-90-124.ngrok.io/`;

export const getData = ({ path }) => {
    return fetch(`${apiUrl}${path}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };
  