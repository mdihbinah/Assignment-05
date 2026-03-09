let tab = 'Open'

const openList = []
const closedList = []

function load(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(data => data.json())
    .then(issues => {for (let ele of issues.data){

     if(ele.status == 'open'){
          openList.push(ele.id)
     } else{
          closedList.push(ele.id)
     }
    }})
}
load()

const tabSection = document.getElementById('tab-section')
const cards = document.getElementById('cards')




function f(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(data => data.json())
    .then(issues => displayIssue(issues.data))
}
f()

function displayIssue(issues){
    cards.innerHTML = ''
    
    for(let element of issues){
        if(tab == 'Open' && !openList.find(ele => ele == element.id)){
            continue
        } else if(tab == 'Closed' && !closedList.find(ele => ele == element.id)) {
            continue
        }
        const newEle = document.createElement('div')

        const label1 = `<p class="max-h-8 bg-red-400  p-1 rounded-[5px]">${element.labels[0]}</p> <p class="bg-yellow-200  p-1 rounded-[5px]">Help ${element.labels[1]}</p>`
const label2 = `<p class="max-h-8 bg-green-400  p-1 rounded-[5px]">${element.labels[0]}</p>`

    const formattedDate1 = make_date(element.createdAt)
    const formattedDate2 = make_date(element.updatedAt)

        newEle.innerHTML = `
<div class="card min-h-[350px] p-2 shadow-xl space-y-2 border-t-3 border-t-${element.status == 'open'? 'green' : 'violet'}-500">

    <div class=" flex justify-between">
        <img src="assets/${element.status == 'open'? 'Open-Status.png': 'Closed- Status .png'}" alt="">
        <h2 class="bg-red-400 p-1 rounded-xl">${element.priority}</h2>
    </div>

    <h2 class="text-xl">${element.title}</h2>
    <h3 class="opacity-60">${element.description}</h3>
    <div class="flex justify-between gap-1">
        ${element.labels.length == 2? label1: label2}
    </div>

    <hr>

    <div class="">
        <div class="flex justify-between">
            <p>Created at</p>
            <p>${formattedDate1}</p>
        </div>
        <div class="flex justify-between">
            <p>Updated at</p>
            <p>${formattedDate2}</p>
        </div>
    </div>
</div>
        `
    cards.append(newEle)
    }
}



function make_date(d){
    const date = new Date(d);
    // "en-US" ensures the MM/DD/YYYY format
    return date.toLocaleDateString('en-US'); 
}