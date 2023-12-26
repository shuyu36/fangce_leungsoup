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

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
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

  // 獲取按鈕元素
  var dropdownButton = document.getElementById("dropdownMenuButton1");
  var dropdownMenu = document.querySelector(".dropdown-menu");

  // 獲取所有的 dropdown-item 元素
  var dropdownItems = document.querySelectorAll(".dropdown-item");

  // 為每個 dropdown-item 添加點擊事件監聽器
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log("Button clicked!");

      // 獲取點擊的 dropdown-item 的文字
      var itemName = item.textContent.trim();

      // 設置按鈕的文字為點擊的 dropdown-item 的文字
      dropdownButton.textContent = itemName;
    });
  });

  // 獲取所有菜單鏈接
  var menuLinks = document.querySelectorAll(".dropdown-item");
  var pcMenuLinks = document.querySelectorAll(".menu-link");
  function mapMenuData(menuLinks, type) {
    // 為每個菜單鏈接添加點擊事件監聽器
    menuLinks.forEach(function (link, index) {
      console.log(link);
      link.addEventListener("click", function (event) {
        // 阻止點擊事件冒泡
        // event.stopPropagation();
        // 獲取 data-target 的值
        var target = link.getAttribute("data-target");

        // // 將所有的 dropdown-item 移除 active 類別
        // menuLinks.forEach(function (item) {
        //   item.classList.remove("active");
        // });

        // // 將當前點擊的 dropdown-item 添加 active 類別
        // link.classList.add("active");

        // 通過 data-target 的值找到對應的索引
        var index = Array.from(menuLinks).findIndex(function (item) {
          return item.getAttribute("data-target") === target;
        });
        console.log(target);
        console.log(index);
        // 如果找到索引，則導航到相應的 swiper 幻燈片
        if (index !== -1) {
          const tempIndex = type === 'pc' ? index :index - 4
          swiper.slideTo(tempIndex);
        }
      });
    });
  }

  mapMenuData(menuLinks, 'mobile')
  mapMenuData(pcMenuLinks, 'pc')

});
