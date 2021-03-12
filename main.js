var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://png.pngtree.com/png-clipart/20190604/original/pngtree-grandpa-cartoon-png-image_846781.jpg", "https://classroomclipart.com/images/gallery/Clipart/Family/TN_happy-father-son-african-american-family-clipart.jpg" , "https://i.etsystatic.com/9313766/r/il/5a814b/1288077453/il_570xN.1288077453_81eb.jpg","https://www.clipartmax.com/png/middle/208-2085264_sister-clip-art-hello-school-girl-clipart.png","https://www.clipartmax.com/png/middle/1-18951_share-your-clipart-archive-and-find-cliparts-for-your-jokes-for-girls.png","https://i.pinimg.com/originals/bf/04/59/bf0459fc4fc68524d407ca008e01c8e5.gif"];
var names = ["Famaily Book","Ram Ballbh Didwania", "Avinash Didwania", "Meenakshi Didwania", "Stuti Didwania", "Samriddhi Didwania","THANKYOU"];
var i = 0;
function nextslide()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var nextslideImage = images[i];
    var  nextslideName  = names[i];
    document.getElementById("family_member_image").src =  nextslideImage;
    document.getElementById("family_member_name").innerHTML =  nextslideName;
}
