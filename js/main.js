$(function() {
  openAbout();
  closeAbout();
  openContact();
  closeContact();
});


function openAbout() {
  $('.open-about').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.open-about, #about').removeClass('is-open'); }
    else { $('.open-about, #about').addClass('is-open'); $('.open-contact, #contact').removeClass('is-open'); }
  });
}

function closeAbout() {
  $('.close-about-icon').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.close-about-icon, #about').removeClass('is-open'); }
    else { $('.open-about, #about').removeClass('is-open'); }
  });
}

function openContact() {
  $('.open-contact').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.open-contact, #contact').removeClass('is-open'); }
    else { $('.open-contact, #contact').addClass('is-open'); $('.open-about, #about').removeClass('is-open'); }
  });
}

function closeContact() {
  $('.close-contact-icon').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.close-contact-icon, #contact').removeClass('is-open'); }
    else { $('.open-contact, #contact').removeClass('is-open'); }
  });
}

;