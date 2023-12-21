const btnHeart = document.querySelectorAll(".card-news");

btnHeart.forEach((element) => {
  element.addEventListener("click", (e) => {
    const containerHeart = e.target.parentNode;
    const classLike = containerHeart.getAttribute("class").includes("like");

    if (containerHeart.getAttribute("class").includes("btn-heart")) {
      if (!classLike) {
        containerHeart.innerHTML = `<i class="bi bi-heart-fill"></i>`;
        containerHeart.classList.add("like");
      } else {
        containerHeart.innerHTML = `<i class="bi bi-heart"></i>`;
        containerHeart.classList.remove("like");
      }
    }
  });
});
