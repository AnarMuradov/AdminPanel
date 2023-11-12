const button = document.querySelector("button");
const Image = document.querySelector(".img");
const Name = document.querySelector(".name");
const Job = document.querySelector(".job");
button.addEventListener("click", function () {
  fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img: Image.value,
      name: Name.value,
      job: Job.value,
    }),
  });
});
