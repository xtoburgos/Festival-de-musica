function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".articulo"))}function scrollNav(){document.querySelectorAll(".navegacionPrincipal a").forEach((function(e){e.addEventListener("click",(function(e){const t=document.querySelector(e.target.attributes.href.value);e.preventDefault(),t.scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarImagen;const a=document.createElement("LI");a.appendChild(n),e.appendChild(a)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const a=document.createElement("DIV");a.appendChild(n),a.classList.add("overlay"),a.onclick=()=>{a.remove()};const c=document.querySelector("body");c.appendChild(a),c.classList.add("pantalla-fija")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
