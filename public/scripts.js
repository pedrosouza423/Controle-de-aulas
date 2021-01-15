const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = modalOverlay.querySelector('.modal')

/*  Modal active */
for(let card of cards){
    card.addEventListener('click', function() {
        const siteId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${siteId}`

    })
}
/*  Close-Modal  */
modalOverlay.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

/* Modal-Maximize */
modal.querySelector('.maximize-modal').addEventListener('click', function(){
    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    }else{
        modal.classList.add('maximize')

    }

})