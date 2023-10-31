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