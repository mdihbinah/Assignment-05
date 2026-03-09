
tabSection.addEventListener('click', function(event){
     const tabBtn = tabSection.querySelectorAll('button')

     tabBtn.forEach(d => d.classList.remove('btn-primary'))

     event.target.classList.add('btn-primary')
     tab = event.target.innerText
     f()
})


// cards.addEventListener('click', function(){

// })
