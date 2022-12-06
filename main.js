import "./src/assets/css/main.css";
import { addCategory, addLink, getCategories, getLinkList } from "./src/firebase";

document.addEventListener("DOMContentLoaded", () => {
    $("#category").select2({
        placeholder: "Choose Category",
        allowClear: true,
    });
});

const addLinkForm = document.getElementById("addLinkForm");
const addCategoryForm = document.getElementById("addCategoryForm");
const openLinkAddForm = document.getElementById("openLinkAddForm");
const openCategoryAddForm = document.getElementById("openCategoryAddForm");
const closeAddLinkForm = document.getElementById("closeAddLinkForm");
const closeAddCategoryForm = document.getElementById("closeAddCategoryForm");

openLinkAddForm.addEventListener("click", () => {
    $("#addLinkFormContainer").fadeIn("fast");
});
openCategoryAddForm.addEventListener("click", () => {
    $("#addCategoryFormContainer").fadeIn("fast");
});
closeAddLinkForm.addEventListener("click", () => {
    $("#addLinkFormContainer").fadeOut("fast");
});
closeAddCategoryForm.addEventListener("click", () => {
    $("#addCategoryFormContainer").fadeOut("fast");
});

addLinkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    "approved" in formProps ? (formProps.approved = true) : "";
    formProps.category = $("#category").val();
    console.log(formProps);
    addLink(formProps);
    e.target.reset();
    $("#category").val(null).trigger("change");
});

addCategoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    addCategory(formProps);
    e.target.reset();
});

getLinkList();
getCategories();
