const share = document.querySelectorAll('.share-icon');
const contents = document.querySelector('.share-content'); 
const mobileFooter = document.querySelector('.mobile-card-footer'); 
const deskFooter = document.querySelector('.desktop-card-footer')


share.forEach( shareIcon =>{
  shareIcon.addEventListener('click', function(){
  var screenWidth = window.innerWidth;
  
  if(screenWidth > 992){
    contents.style.display =  contents.style.display === 'flex' ? 'none' : 'flex';
  }else{
    mobileFooter.style.display =  mobileFooter.style.display === 'flex' ? 'none' : 'flex'; 
    deskFooter.style.display = deskFooter.style.display === 'none' ? 'flex' : 'none'; 
  }

})
})