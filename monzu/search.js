function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('barrapesquisa') //criar classe de pesquisa. nao sei se ta certo
    for (i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        } else {
            x[i].style.display = "#" // criar sla o que. no video era list-item
        }
    }
}