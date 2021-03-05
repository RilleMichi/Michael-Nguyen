/*Um Navigation Bar auszublenden beim runter Scrollen-*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});