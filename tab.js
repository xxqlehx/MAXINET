// let tabsWithContent = (function () {
//     let tabs = document.querySelectorAll('.tabs li');
//     let tabsContent = document.querySelectorAll('.tab-content');
  
//     let deactvateAllTabs = function () {
//       tabs.forEach(function (tab) {
//         tab.classList.remove('is-active');
//       });
//     };
  
//     let hideTabsContent = function () {
//       tabsContent.forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//     };
  
//     let activateTabsContent = function (tab) {
//       tabsContent[getIndex(tab)].classList.add('is-active');
//     };
  
//     let getIndex = function (el) {
//       return [...el.parentElement.children].indexOf(el);
//     };
  
//     tabs.forEach(function (tab) {
//       tab.addEventListener('click', function () {
//         deactvateAllTabs();
//         hideTabsContent();
//         tab.classList.add('is-active');
//         activateTabsContent(tab);
//       });
//     })
  
//     tabs[0].click();
//   })();

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }