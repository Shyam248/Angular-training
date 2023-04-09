let image=document.getElementById('image');
let images = ['img-1.jpg','img-2.jpg','img-3.jpg', 'img-4.jpg', 'img-5.jpg']
setInterval(function()
{
   let random = Math.floor(Math.random() * 4);
   image.src = images[random];
}, 1000);
