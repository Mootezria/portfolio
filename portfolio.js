const menu = document.getElementById("menu");
const action = document.getElementById("actions");
menu.addEventListener("click" , ()=>{
    hundmenu()
})
function hundmenu(){
    menu.classlist.toggle("is-active");
    action.classlist.toggle("is-active");

}