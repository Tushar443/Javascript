year();
lineTag();
dateAndTime();
document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h2').style.textAlign = 'center'
function year(){
    let elementH1 = document.querySelector('h1');
    let str = elementH1.innerHTML;
    let year = str.slice(31,35);
    let first = str.substring(0,30)
    let flag = 0;
    let result  = `<span>`+ first +`</span> <span id= "year">`+ year +`</span>`;
    elementH1.innerHTML = result ;
    let year2 = document.getElementById('year');
    let inter = setInterval(()=>{
        if(flag % 2 === 0){
         year2.style.color = 'gray';
        }else{
         year2.style.color = 'blue';
         }
         
         flag++; 
     },1000)

}

function lineTag(){
    let lines = document.querySelectorAll('li');
lines.forEach(l =>{
    let txt = l.innerHTML;
    let arr = txt.split(" ");
    let compare = arr.splice(-1,1);
    // console.log(compare);
    l.style.padding = '10px';
    l.style.border = '10px';
    l.style.margin = '10px';
    if(compare == 'Done'){
        l.style.backgroundColor = 'lightgreen';
    }else if(compare == 'Ongoing'){
        l.style.backgroundColor = 'yellow';
    }else if(compare == 'Coming'){
        l.style.backgroundColor = 'red';
    }
})
}

function dateAndTime(){
    let time = document.querySelector('h3');
    let date = new Date();
console.log(time);
    let arr = date.toString().split(' ');
    let newDateTime =arr.splice(1,4).join(' ');
    time.style.padding = '10px';
    time.style.border = '10px';
    time.style.margin = '10px';
    time.style.textAlign = 'center'
    time.style.border = "thick solid #0000FF";
    let flag = 0;
    let inter = setInterval(()=>{
       if(flag % 2 === 0){
        time.style.backgroundColor= 'green';
       }else{
        time.style.backgroundColor = 'red';
        }
        
        flag++; 
    },1000)
   
    time.innerHTML = newDateTime;
}
