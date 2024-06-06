




window.onload = () =>{
    let aboutButton = document.querySelector('#about-option');
    let contactButton = document.querySelector('#contact-option');
    let projectButton = document.querySelector('#project-option');
    let resumeButton = document.querySelector('#resume-option');
    let galleryButton = document.querySelector('#gallery-option');

    let returnButton = document.querySelector('#returnToTop');



    let toContact = () =>{
        document.querySelector('#resumeContact').scrollIntoView({
            behavior:"smooth", block:"start"});
    }

    aboutButton.onclick = () => {
        document.querySelector('#about').scrollIntoView({
            behavior:'smooth',block:'start'});
    }

    contactButton.onclick = toContact;
    resumeButton.onclick = toContact;

    projectButton.onclick = () =>{
        document.querySelector("#projects-wrapper").scrollIntoView({
            behavior:"smooth",block:"start"});
    }

    galleryButton.onclick = () =>{
        document.querySelector('#gallery').scrollIntoView({
            behavior:"smooth",block:"start"});
    }
    
    returnButton.onclick = () =>{
        document.querySelector('#topbarPlaceholder').scrollIntoView({
        behavior:"smooth"});
    }



}