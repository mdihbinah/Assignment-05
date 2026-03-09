
tabSection.addEventListener('click', function(event){
     const tabBtn = tabSection.querySelectorAll('button')

     tabBtn.forEach(d => d.classList.remove('btn-primary'))

     event.target.classList.add('btn-primary')
     tab = event.target.innerText

     f()
     
     if(tab == 'All'){
          count.innerText = 50
     } else if (tab == 'Open'){
          count.innerText = openList.length
     } else if (tab == 'Closed'){
          count.innerText = closedList.length
     }
})



// cards.addEventListener('click', function(){

// })
