var menuItems = document.querySelector(".menu_item");
var menuChose = document.querySelector(".menu_chose_desktop");
var ulLinks = document.querySelectorAll(".menu_ul");

// 電腦版menu 點擊左方菜單時 將menu顯示出來
document
  .querySelector(".menu_chose_desktop")
  .addEventListener("click", function () {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
      menuItems.style.display = "flex";
      menuItems.style.alignItems = "center";
      // console.log(ulLinks);
    } else {
      menuItems.style.display = "none";
    }
  });

// 點擊項目時收回menu
ulLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    menuItems.style.display = "none";
  });
});

// 監測是否點擊menu 若不適點擊菜單 則將menu收回
document.addEventListener("click", function (event) {
  if (!menuChose.contains(event.target) && !menuItems.contains(event.target)) {
    menuItems.style.display = "none";
  }
  // console.log(event.target);
  // 小於767px時，將 menuItems 隱藏
  window.addEventListener("resize", function () {
    if (window.innerWidth < 767) {
      menuItems.style.display = "none";
    }
  });
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });

  // 手機版menu
  var dropdownButton = document.getElementById("dropdownMenuButton1");
  var dropdownItems = document.querySelectorAll(".dropdown-item");

  // 為每個 dropdown-item 添加點擊事件監聽器
  dropdownItems.forEach(function (downName) {
    downName.addEventListener("click", function () {
      // console.log(dropdownItems);
      // 獲取點擊的 dropdown-item 的文字
      var itemName = downName.textContent.trim();
      // 設置按鈕的文字為點擊的 dropdown-item 的文字
      dropdownButton.textContent = itemName;
    });
  });

  // 獲取所有菜單鏈接
  var menuLinks = document.querySelectorAll(".dropdown-item");
  var pcMenuLinks = document.querySelectorAll(".menu-link");
  function mapMenuData(menuLinks, type) {
    // 為每個菜單鏈接添加點擊事件監聽器
    menuLinks.forEach(function (link) {
      // console.log(link);
      link.addEventListener("click", function (event) {
        // 獲取 data-target 的值
        var target = link.getAttribute("data-target");
        for (const link of ulLinks) {
          link.style.color = "white";
        }
        // ulLinks.forEach((i) => {
        //   i.style.color = 'white';
        // })

        // 通過 data-target 的值找到對應的索引
        var index = Array.from(menuLinks).findIndex(function (item) {
          return item.getAttribute("data-target") === target;
        });
        // 如果找到索引，則導航到相應的 swiper 幻燈片
        event.target.parentElement.style.color = "orange";
        console.log(event);
        if (index !== -1) {
          const tempIndex = type === "pc" ? index : index - 4;
          swiper.slideTo(tempIndex);
        }
      });
    });
  }
  mapMenuData(menuLinks, "mobile");
  mapMenuData(pcMenuLinks, "pc");
});
