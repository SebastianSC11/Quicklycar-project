let boton = document.getElementById('btnCorreo');
let form = document.getElementById('inputForm');
let volver = document.getElementById('volver');
let whatsapp = document.getElementById('btnWhatsapp')
let documento = document.getElementById('entireDoc')
let footerfooter = document.getElementById('footer')
let contador = 0;

boton.addEventListener("click", function() {
  if(contador==0){
    form.className = ("form dos")
    contador=1;
    whatsapp.style.visibility = "hidden"
    footer.style.visibility = "hidden"
    documento.style.overflow = "hidden"
  }else {
    form.classList.remove("dos")
    form.className = ("form uno")
    contador=0;
    whatsapp.style.visibility = "visible"
    footer.style.visibility = "visible"
    documento.style.overflow = "inherit"
  }
})

volver.addEventListener("click", function() {
  if(contador==0){
    form.className = ("form dos")
    contador=1;
    whatsapp.style.visibility = "hidden"
    footer.style.visibility = "hidden"
    documento.style.overflow = "hidden"
  }else {
    form.classList.remove("dos")
    form.className = ("form uno")
    contador=0;
    whatsapp.style.visibility = "visible"
    footer.style.visibility = "visible"
    documento.style.overflow = "inherit"
  }
})
