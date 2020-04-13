console.log("Hello")


function changeImage() {

 
    if(document.getElementById('one_pic').style.backgroundImage == 'url("./images/san-fran.jpg")')
    {
        document.getElementById('one_pic').style.backgroundImage = 'url("./images/kl2.jpg")';
        document.getElementById('one_pic').innerHTML = "From Malaysia";
    }
    else
    {
        document.getElementById('one_pic').style.backgroundImage = 'url("./images/san-fran.jpg")';
        document.getElementById('one_pic').innerHTML = "Base in the Bay Area";
    }
    
 
}   