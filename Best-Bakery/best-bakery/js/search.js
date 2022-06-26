const searchCake=() =>{
    const searchBox = document.getElementById("search-cake").value.toLowerCase();
    const items=document.getElementById("card-body");
    const item =document.querySelectorAll(".col-lg-4");
    const name = document.getElementsByTagName("h3");
    for (let i = 0; i < name.length ;i++) {
        let match =item[i].getElementsByTagName('h3')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
         if (textvalue.toLowerCase().indexOf(searchBox)>-1) {
             item[i].style.display = "flex";
         }else{
             item[i].style.display = "none";
         }
         }
    }
}
const select = document.getElementById("sort");
var opt = select.options[select.selectedIndex];
switch (opt.value) {
    case 'Price':
        sortByPrice();
        break;
    default:
        break;
}
function sortByPrice(){
    var elements = [].slice.call(document.getElementsByClassName("price"));
    elements.sort(function(a,b){
      return parseFloat(b.innerHTML.substring(1)) - parseFloat(a.innerHTML.substring(1));
    });
    for (var i=0; i<elements.length; i++)
      elements[i].parentNode.appendChild(elements[i]);
  }
  
  sortByPrice();
