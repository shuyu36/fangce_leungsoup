var menuItems = document.querySelector(".menu_item");
var menuChose = document.querySelector(".menu_chose_desktop");

document
  .querySelector(".menu_chose_desktop")
  .addEventListener("click", function () {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
      menuItems.style.display = "flex";
      menuItems.style.alignItems = "center";
    } else {
      menuItems.style.display = "none";
    }
  });

document.addEventListener("click", function (event) {
  if (!menuChose.contains(event.target) && !menuItems.contains(event.target)) {
    menuItems.style.display = "none";
  }
});

// 取得所有菜單連結
var menuLinks = document.querySelectorAll(".menu-link");

// 監聽每個菜單連結的點擊事件
menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // 取得目標菜單的 ID
    var targetMenuId = link.getAttribute("data-target");

    // 移除之前的 active class
    document.querySelectorAll(".carousel-item").forEach(function (item) {
      item.classList.remove("active");
    });

    // 將目標菜單加上 active class
    document.getElementById(targetMenuId).classList.add("active");
  });
});

var myCarousel1 = new bootstrap.Carousel(document.getElementById('carouselExampleInterval'));
var myCarousel2 = new bootstrap.Carousel(document.getElementById('carouselExampleMobile'));

