const cardcontainer = document.querySelector(".card-list");
fetch("http://localhost:3000/employees")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      Create(element.img, element.name, element.job);
    })
  );

function Create(img, name, job) {
  const card = document.createElement("div");
  const cardimg = document.createElement("img");
  const cardname = document.createElement("h2");
  const cardjob = document.createElement("span");

  card.classList.add("card");
  cardimg.setAttribute("src", img);
  cardname.textContent = name;
  cardjob.textContent = job;
  cardcontainer.append(card);
  card.append(cardimg, cardname, cardjob);
}
