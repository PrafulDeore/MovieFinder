var container = document.getElementById("container");
  function fetchApi() {
    let title = document.getElementById("title").value;
    let url = `http://www.omdbapi.com/?apikey=55a53429&t=${title}`;
    var arr = [];
    async function getUser() {
      try {
        let res = await fetch(url);
        let data = await res.json();
        arr.push(data);
        let user = arr;
        appendMovie(user);
        console.log("user:", user);
      } catch (err) {
        console.log("This error came from try & catch:", err);
      }
    }
    getUser();

    function appendMovie(movie) {
      movie.forEach(function (element) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.Poster);

        let title = document.createElement("h1");
        title.innerText = `Title - ${element.Title}`;

        let Year = document.createElement("h2");
        Year.innerText = `Year - ${element.Year}`;

        let actor = document.createElement("h3");
        actor.innerText = `Cast - ${element.Actors}`;

        let Director = document.createElement("h5");
        Director.innerText = `Director - ${element.Director}`;

        let rating = document.createElement("h5");
        rating.innerText = `Rating - ${element.Ratings[0].Value}`;

        div.append(img, title, Year, actor, Director, rating);
        container.appendChild(div);
      });
    }
  }