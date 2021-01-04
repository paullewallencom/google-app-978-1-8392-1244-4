 //https://spreadsheets.google.com/feeds/list/YOURID/1/public/values?alt=json 
 const feedID = 'https://spreadsheets.google.com/feeds/list/1NpsE9GGeotJXT8mU6B6OWcnUvzEGB2EZVKsKs5WRlfU/1/public/values?alt=json';
 document.addEventListener('DOMContentLoaded', getData);
const output = document.querySelector('.output');
function outputData(data){
    console.log(data);
    for(let i = 0;i < data.length; i++){
        let div = document.createElement('div');
        div.innerHTML = `${data[i].title} ${data[i].date} 
        ${data[i].start} - ${data[i].end}`;
        output.appendChild(div);
        console.log(data[i]);
    }
}


 function getData() {
     fetch(feedID).then(function (res) {
         return res.json()
     }).then(function (data) {
         let tempArr = [];
         let sheetName = data.feed.title.$t;
         data.feed.entry.forEach(function (el) {
             let holder = {};
             for (let key in el) {
                 if (key.substring(0, 3) == "gsx") {
                     holder[key.split('$')[1]] = el[key].$t;
                 }
             }
             tempArr.push(holder);
         })
         outputData(tempArr);
     })
 }