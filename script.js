
const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
if(menu) menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const form=document.getElementById("leadForm");
if(form) form.addEventListener("submit",e=>{
 e.preventDefault();
 const d=new FormData(form);
 const body=`Name: ${d.get("name")}\nCompany: ${d.get("company")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nService: ${d.get("service")}\n\nMessage:\n${d.get("message")}`;
 location.href=`mailto:hello@zyrocorp.com?subject=${encodeURIComponent("ZYROCORP Discovery Call Request")}&body=${encodeURIComponent(body)}`;
});
