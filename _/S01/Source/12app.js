 //https://spreadsheets.google.com/feeds/list/YOURID/1/public/values?alt=json 
 const feedID = 'https://spreadsheets.google.com/feeds/list/1NpsE9GGeotJXT8mU6B6OWcnUvzEGB2EZVKsKs5WRlfU/1/public/values?alt=json';
 document.addEventListener('DOMContentLoaded', getData);

 function getData() {
     fetch(feedID).then(function (res) {
         return res.json()
     }).then(function (data) {
         console.log(data);
         let tempArr = [];
         let sheetName = data.feed.title.$t;
         data.feed.entry.forEach(function (el) {
             let holder = {};
             for (let key in el) {
                 console.log(key);
                 if (key.substring(0, 3) == "gsx") {
                     console.log(key.split('$')[1]);
                     holder[key.split('$')[1]] = el[key].$t;
                 }
             }
             tempArr.push(holder);
             console.log(el);
         })
         console.log(tempArr);
     })
 }