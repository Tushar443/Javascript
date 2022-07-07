//getElement by Tag name 
const h1Tags = document.getElementsByTagName('h1');

console.log('length = '+h1Tags.length);
 console.log(h1Tags);
 for(let i=0 ;i < h1Tags.length;i++){
     console.log(h1Tags[i]);
 } 
//getElement by class name 
console.log('@@@@@@@@@@@@  By Tag name @@@@@@@@@@@')
        

          console.log('@@@@@@@@@@@@  By Title @@@@@@@@@@@')
          const allTitles = document.getElementsByClassName('title')

          console.log(allTitles) //HTMLCollections
          console.log('class length = '+allTitles.length) // 4

          for (let i = 0; i < allTitles.length; i++) {
            console.log(allTitles[i]) // prints each elements in the HTMLCollection
          }
          console.log('@@@@@@@@@@@@  By ID @@@@@@@@@@@')
          let firstTitle = document.getElementById('first-title')
          console.log(firstTitle) // <h1>First Title</h1>
          console.log('@@@@@@@@@@@@  By Query Selector @@@@@@@@@@@')
          let firstTitle1 = document.querySelector('h1') // select the first available h1 element
          let firstTitle2 = document.querySelector('#first-title') // select id with first-title
           let firstTitle3 = document.querySelector('.title') // select the first available element with class title
          console.log(firstTitle3);
          
      const alltitals = document.querySelectorAll('h1');
      const alltitals1 = document.querySelectorAll('.title');
      //alltitals1.forEach(t => console.log(t))

      const title = document.querySelectorAll('h1');
      title[3].className='title';
      title[3].id='fourth-tag'
     // title.forEach(t => console.log(t))
       // Using setAttribute
       const titles = document.querySelectorAll('h1')
       titles[3].setAttribute('class', 'h1title')
       titles[3].setAttribute('id', 'fourth-titlesetAttribute')
       titles.forEach(t => console.log(t))

       //another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')