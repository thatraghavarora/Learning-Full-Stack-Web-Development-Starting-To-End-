 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            output.innerText = `Latitude: ${lat}\nLongitude: ${lon}`;
          },
          (error) => {
            output.innerText = `Error: ${error.message}`;
          }
        );
      } else {
        output.innerText = "Geolocation is not supported by your browser.";
      }
    