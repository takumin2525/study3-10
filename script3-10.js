window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists");
    console.log(pullDownButton);
})

lists.addEventListener('mouseover', function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.setAttribute("style", "background-color:blue;")
    console.log("乗った時は青色");
})

lists.addEventListener('click', function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.setAttribute("style", "background-color:green;")
    console.log("クリック時は緑色");
})

lists.addEventListener('mouseout', function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.removeAttribute("style", "background-color:blue;"
    )
    console.log("外れた時は赤色");
})

