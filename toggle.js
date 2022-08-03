let toggleNavStatus = false;


let toggleNav = function () {
    let getMenuDropdown = document.querySelector(".menu-dropdown");
    let getMenuDropdownUl = document.querySelector(".menu-dropdown ul");
    let getMenuDropdownLi = document.querySelector(".menu-dropdown li");
    
    if (toggleNavStatus === false) {
        getMenuDropdownUl.style.visibility = "visible";
        getMenuDropdown.style.width = "272px";
        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getMenuDropdownUl.style.visibility = "hidden";
        
        toggleNavStatus = false;
    }
}

function changeBackGround(color){
    document.body.style.backgroundColor = color; {
    toggleNav();
        
    }
   
 
}


