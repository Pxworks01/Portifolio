function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if(html.classList.contains("light")){
        img.setAttribute("src","../Portifolio/img/perfil2.png");
    }else {
        img.setAttribute("src","../Portifolio/img/perfil1.png");
    }
}