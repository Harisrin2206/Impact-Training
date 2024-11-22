let adminDashboard = document.querySelector(".dashboard");
let ProductAdd = document.querySelector(".ProductAdd");
let ServiceSlotting = document.querySelector(".ServiceSlotting");
let Testride = document.querySelector(".Testride");
let TechnicianAllotment = document.querySelector(".TechnicianAllotment");
let Profile = document.querySelector(".Profile");


let dashboard = document.getElementById("dashboard");
let change = document.getElementById("change");
let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");

dashboard.addEventListener('click', () => {
     adminDashboard.style.display = "grid";
     ProductAdd.style.display = "none";
     ServiceSlotting.style.display = "none";
     Testride.style.display = "none";
     TechnicianAllotment.style.display = "none";
     Profile.style.display = "none";
});

change.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     ProductAdd.style.display = "grid";
     ServiceSlotting.style.display = "none";
     Testride.style.display = "none";
     TechnicianAllotment.style.display = "none";
     Profile.style.display = "none";
});
change1.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     ProductAdd.style.display = "none";
     ServiceSlotting.style.display = "grid";
     Testride.style.display = "none";
     TechnicianAllotment.style.display = "none";
     Profile.style.display = "none";
});
change2.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     ProductAdd.style.display = "none";
     ServiceSlotting.style.display = "none";
     Testride.style.display = "grid";
     TechnicianAllotment.style.display = "none";
     Profile.style.display = "none";
});
change3.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     ProductAdd.style.display = "none";
     ServiceSlotting.style.display = "none";
     Testride.style.display = "none";
     TechnicianAllotment.style.display = "grid";
     Profile.style.display = "none";
});
change4.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     ProductAdd.style.display = "none";
     ServiceSlotting.style.display = "none";
     Testride.style.display = "none";
     TechnicianAllotment.style.display = "none";
     Profile.style.display = "grid";
});