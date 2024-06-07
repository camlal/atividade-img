function changeImage1() {
    const img = document.getElementById('myImage1'); 
    const currentSrc = img .getAttribute("src"); 

    if (currentSrc === './img/kendrick.jpg') { 
        img.setAttribute("src", "./img/kendrick2.webp"); 
        img.setAttribute("alt", "kendrick2");
    } else { 
        img.setAttribute("src", "./img/kendrick.jpg");
        img.setAttribute("alt", "kendrick");
    }
}

function changeImage2() {
    const img = document.getElementById('myImage2'); 
    const currentSrc = img .getAttribute("src"); 
    if (currentSrc === './img/rocky.avif') { 
        img.setAttribute("src", "./img/rocky2.webp"); 
        img.setAttribute("alt", "rocky2");
    } else { 
        img.setAttribute("src", "./img/rocky.avif");
        img.setAttribute("alt", "rocky");
    }
}

function changeImage3() {
    const img = document.getElementById('myImage3'); 
    const currentSrc = img .getAttribute("src"); 
    if (currentSrc === './img/tyler.jpg') { 
        img.setAttribute("src", "./img/tyler2.webp"); 
        img.setAttribute("alt", "tyler2");
    } else { 
        img.setAttribute("src", "./img/tyler.jpg");
        img.setAttribute("alt", "tyler");
    }
}