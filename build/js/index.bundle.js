!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),function(){const e=document.querySelectorAll("[data-modal]"),t=document.body,o=document.querySelectorAll(".modal__close"),c=document.querySelectorAll(".modal");function n(e){e.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{e.classList.remove("show"),t.classList.remove("no-scroll")}),200)}e.forEach((e=>{e.addEventListener("click",(e=>{let o=e.currentTarget.getAttribute("data-modal"),c=document.getElementById(o),n=c.querySelector(".modal__content");n.addEventListener("click",(e=>{e.stopPropagation()})),c.classList.add("show"),t.classList.add("no-scroll"),setTimeout((()=>{n.style.transform="none",n.style.opacity="1"}),1)}))})),o.forEach((e=>{e.addEventListener("click",(e=>{n(e.currentTarget.closest(".modal"))}))})),c.forEach((e=>{e.addEventListener("click",(e=>{n(e.currentTarget)}))}))}()}();