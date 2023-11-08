// tabs
const tabLinks = document.querySelectorAll('.tab-link');
const tabPane = document.querySelectorAll('.tab-pane');

tabLinks.forEach(
  function (link,index){
    link.addEventListener("click",function(){
      tabPane.forEach(
        function(panel,indice){
          panel.style.display = 'none';
        });
        tabPane[index].style.display = 'block';
    })
  }
);
// acordeon
const acordeon = document.getElementsByClassName('contenedor');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}
// ventana emergente
document.getElementById("mostrarVentanaEmergente").addEventListener("click", function() {
  document.getElementById("ventanaEmergente").style.display = "block";
});

document.getElementById("cerrarVentanaEmergente").addEventListener("click", function() {
  document.getElementById("ventanaEmergente").style.display = "none";
});
// ventana emergente2
document.getElementById("mostrarVentanaEmergente2").addEventListener("click", function() {
  document.getElementById("ventanaEmergente2").style.display = "block";
});

document.getElementById("cerrarVentanaEmergente2").addEventListener("click", function() {
  document.getElementById("ventanaEmergente2").style.display = "none";
});