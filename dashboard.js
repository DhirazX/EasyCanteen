//Slider ------------------------------------
let i = 0;
let images = [];
var time = 3000;

images[0] = 'https://ik.imagekit.io/dzz/easycanteen/tr:w-300/kabir-cheema-8T9AVksyt7s-unsplash_Fs62hdFvv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654776222643';
images[1] = 'https://ik.imagekit.io/dzz/easycanteen/tr:w-300/annie-spratt-oT7_v-I0hHg-unsplash_nTj6bMK_A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654776222920';
images[2] = 'https://ik.imagekit.io/dzz/easycanteen/tr:w-300/tek-bahadur-bj07uo3SnhM-unsplash_Gwuj-RbcWj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654776280913';
images[3] = 'https://ik.imagekit.io/dzz/easycanteen/tr:w-300/5bd3a3027c65045b93886002d2c788bf_Ky1WH6gLe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654776367355';

slider();
function slider(){
    document.slideImg.src = images[i];

    if(i < images.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout(slider,time);
}



const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click",()=>{
    changeSlide("prev");
});
rightArrow.addEventListener("click",()=>{
    changeSlide("next");
});

function changeSlide(direction){

    if(direction == 'next'){
        i++;
        if(i >= images.length){
            i=0;
        }
    }else{
        if(i == 0){
            i = images.length -1;
        }
        i--;
    }
    document.slideImg.src = images[i];

}

//USER PROFILE
let userIcon = document.querySelector('.user-icon');
let userDetails = document.querySelector('.user-profile');
userIcon.addEventListener("click",()=>{
    userDetails.classList.toggle('active');
    userIcon.classList.toggle('white-icon');
});

