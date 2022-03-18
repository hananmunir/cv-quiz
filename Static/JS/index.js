var img, personalInfo, projectImg, lastScrollTop = 0;

window.onload = function (){
    img =  document.getElementById('myImg');
    personalInfo = document.getElementById('personalInfo')

    // projectImg = document.getElementsByClassName('projectImg')
    // console.log(projectImg)
    // adjustPictureSize();

    window.onscroll = function() {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
       personalInfo.style.maxHeight = "92%" ;
       myImg.style.margin = 0;
     
    } else {
        personalInfo.style.maxHeight = "70%" ;
        myImg.style.marginTop = "-8rem";
       
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

}

/* 
function adjustPictureSize(){
    let width = screen.width

    for(let i = 0; i < projectImg.length; i++)
    {
      
        if(width < 500){
            console.log("500")
            projectImg[i].style.width = "300px"
        }else if(width < 600){
            console.log("800")
            projectImg[i].style.width = "450px"
        }
        else if(width < 1100){
            console.log("1100")
            projectImg[i].style.width = "400px"
        }
        else if(width < 1490){
            console.log("1400")
            projectImg[i].style.width = "400px"
        }
        else if(width < 1800){
            console.log("1800")
            projectImg[i].style.width = "450px"
        }
    }
} */