const table = document.querySelector("table");
fetch("http://localhost:3000/employees")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) =>
      Createtable(element.id, element.img, element.name, element.job)
    )
  );

function Createtable(id, img, name, job) {
  const tr = document.createElement("tr");
  const trid = document.createElement("td");
  const trimg = document.createElement("img");
  const trname = document.createElement("td");
  const trjob = document.createElement("td");
  const tdimg = document.createElement("td");
  const edit = document.createElement("a");
  const tdedit = document.createElement("td");
  const del = document.createElement("button");
  const tddel = document.createElement("td");

  edit.setAttribute("href", "http://127.0.0.1:5500/EditPage.html#" + id);

  del.addEventListener("click", function () {
    fetch("http://localhost:3000/employees/" + id, {
      method: "Delete",
    });
  });

  trimg.setAttribute("src", img);
  edit.classList.add("edit");
  del.style.backgroundColor = "red";
  del.style.color = "white";
  edit.textContent = "Edit";
  del.textContent = "Delete";
  trid.textContent = id;
  trname.textContent = name;
  trjob.textContent = job;
  tddel.append(del);
  tdedit.append(edit);
  tdimg.append(trimg);
  table.append(tr);
  tr.append(trid, tdimg, trname, trjob, tdedit, tddel);
}
