// creating card node
var card = new Array(20);
var btn = document.getElementById("sub");
fetch(
  "https://api.themoviedb.org/3/trending/all/week?api_key=c34df976000f1a26e276d60a211ed023"
)
  .then((res) => res.json())
  .then((res) => {
    manipulate(res);
  });
btn.onclick = function () {
  var q = document.getElementById("query").value;
  console.log(q);
  fetch(
    "https://api.themoviedb.org/3/search/multi?api_key=c34df976000f1a26e276d60a211ed023&language=en-US&page=1&include_adult=true&query=" +
      q
  )
    .then((res) => res.json())
    .then((res) => {
      manipulate(res);
    });
};
function manipulate(res) {
  var body = document.getElementById("whole");
  var del = document.getElementsByClassName("card");
  body.innerHTML = "";
  var arr = res.results;
  console.log(arr);
  var each = new Array(arr);
  for (var i in arr) {
    card[i] = document.createElement("div");
    card[i].setAttribute("class", "card");
    card[i].setAttribute("style", "width: 18rem;");
    var img = document.createElement("img");
    img.setAttribute("src", "...");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", "Image Retrieval Unsuccessful");
    card[i].appendChild(img);
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    card[i].appendChild(cardBody);
    var title = document.createElement("h5");
    title.className = "card-title";
    cardBody.appendChild(title);
    var text = document.createElement("p");
    text.className = "card-text";
    cardBody.appendChild(text);
    var ul = document.createElement("ul");
    ul.className = "list-group list-group-flush";
    card[i].appendChild(ul);
    console.log(card[i]);
    var li = new Array(4);
    for (var j = 0; j < 4; j++) {
      li[j] = document.createElement("li");
      li[j].className = "list-group-item";
      ul.appendChild(li[j]);
    }
    var cur = card[i].children;
    cur[0].setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500" + arr[i].poster_path
    );
    body.appendChild(card[i]);
    console.log(i);
    var list = card[i].children[2].children;
    if (arr[i].original_title != null) {
      title.textContent = arr[i].original_title;
      list[0].textContent = "Movie";
      list[3].textContent = "Release Day " + arr[i].release_date;
    } else {
      title.textContent = arr[i].original_name;
      list[0].textContent = "Series";
      list[3].textContent = "First Air " + arr[i].first_air_date;
    }
    text.textContent = arr[i].overview;
    list[1].textContent = "Rating " + arr[i].vote_average;
    list[2].textContent = "Vote Count " + arr[i].vote_count;
  }
}
