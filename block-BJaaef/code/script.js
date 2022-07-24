got.houses.forEach((house) => {
  house.people.forEach((people) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    let div = document.createElement("div");
    div.classList.add("people");
    let ul = document.querySelector("ul");

    img.src = people.image;
    h2.innerText = people.name;
    div.append(img, h2);
    p.innerText = people.description;
    btn.innerHTML = `<a href=${people.wikiLink}>Learn More!</a>`;
    li.append(div, p, btn);
    ul.append(li);
  });
});
