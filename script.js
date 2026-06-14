const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark"))
{
document.body.style.background="#111";
document.body.style.color="white";
}
else
{
document.body.style.background="#f5f7fa";
document.body.style.color="#333";
}

});