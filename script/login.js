

document.getElementById('login').addEventListener('click', function(){
    const mNumI = document.getElementById('username')
    const mNum = mNumI.value

    const pinNumI = document.getElementById('pin-number')
    const pinNum = pinNumI.value

    if (mNum == 'admin' && pinNum == 'admin123'){
        window.location.assign('../home.html')
    } else{
        alert('Invalid Input....')
        return
    }
})