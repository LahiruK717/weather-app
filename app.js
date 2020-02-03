window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const weatherAPI = `${proxy}https://api.darksky.net/forecast/75f738816a0cb5f5f5130c2a90ed06a9/${lat},${long}`;

      fetch(weatherAPI)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const { temperature, summary } = data.currently;
        });
    });
  }
});
