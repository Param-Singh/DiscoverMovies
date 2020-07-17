//Trending movies and shows of week
fetch(
  "https://api.themoviedb.org/3/trending/all/week?api_key=c34df976000f1a26e276d60a211ed023"
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res.results);
    var arr = res.results;
    var cardImg = document.getElementsByClassName("card-img-top");
    var card = document.getElementsByClassName("card");
    var card1 = document.querySelectorAll("card");
    var title = document.getElementsByClassName("card-title");
    var text = document.getElementsByClassName("card-text");
    console.log(cardImg);
    var link = document.getElementsByClassName("card-link");
    for (var i in arr) {
      cardImg[i].setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + arr[i].poster_path
      );
      console.log(card[i].children);
      card[i].children[3].remove();
      var list = card[i].children[2].children;
      if (arr[i].original_title != null) {
        title[i].textContent = arr[i].original_title;
        list[0].textContent = "Movie";
        list[3].textContent = "Release Day " + arr[i].release_date;
      } else {
        title[i].textContent = arr[i].original_name;
        list[0].textContent = "Series";
        list[3].textContent = "First Air " + arr[i].first_air_date;
      }
      text[i].textContent = arr[i].overview;
      list[1].textContent = "Rating " + arr[i].vote_average;
      list[2].textContent = "Vote Count " + arr[i].vote_count;
    }
  });
