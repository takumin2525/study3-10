window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists");
    const pullDownParets = document.getElementById("pull-down");
})

lists.addEventListener('mouseover', function(){
    const pullDownButton = document.getElementById("lists");
    this.setAttribute("style", "background-color:blue;")
    console.log("乗った時は青色");
})

lists.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists");
    const pullDownParets = document.getElementById("pull-down");
    if(pullDownParets.getAttribute("style") == "display:block;"){
        pullDownParets.removeAttribute("style", "display:block;")
        console.log("非表示")
    } else{
        pullDownParets.setAttribute("style", "display:block;")
        console.log("表示")
    }
})

lists.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists");
    this.removeAttribute("style", "background-color:blue;"
    )
    console.log("外れた時は赤色");
})

