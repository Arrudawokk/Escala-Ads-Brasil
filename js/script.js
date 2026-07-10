
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const progressBar=document.getElementById('progressBar');const mobileCta=document.getElementById('mobileCta');function updateSalesUI(){const top=window.scrollY;const max=document.documentElement.scrollHeight-window.innerHeight;progressBar.style.width=(max>0?top/max*100:0)+'%';if(mobileCta)mobileCta.classList.toggle('show',top>520)}window.addEventListener('scroll',updateSalesUI,{passive:true});updateSalesUI();
