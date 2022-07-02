class Person1{
    name
    constructor(name){
        console.log("cons "+ this.name);
        this.name = name;
    }
    // ERROR
    // constructor(){
    //     this.name='prsk'
    // }
}

const c = new Person1('tushar')
const s = new Person1();
console.log(c);
console.log(s);


class Person {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
    this.skills = []
    }

    getFullName(){
        return 'My name is '+ this.firstName + " "+this.lastName;
    }
    // getter 
    get getScore() {
        return this.score
      }
    get getSkills() {
        return this.skills
      }

    //setter 
    set setScore(score) {
        this.score += score
      }
    set setSkill(skill) {
        this.skills.push(skill)
      }
    getPersoneInfo (){
       let skill = this.skills.length > 0 &&
                     this.skills.slice(0,this.skills.length -1).join(', ') + `and ${this.skills[this.skills.length-1]}`
        let foramattedSkills = skill ? `he knows ${skill}` : '';
        let info= `Person Info : name = ${this.firstName} ${this.lastName} and age is ${this.age} 
        ${foramattedSkills }` 
        return info;            

    }

    static favoriteSkills(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
  }
  
  const person1 = new Person() // it will take the default values
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
//   console.log(person1)
//   console.log(person2)
//   person1.setScore = 10 ;
//   person1.setScore = 10;
//   person2.setScore =40;
//   person1.setSkill ='html'
//   person2.setSkill='css'
//   console.log(person1);
//   console.log(person2);
//   console.log(person1.getPersoneInfo());
//   console.log(person2.getPersoneInfo());


  // Static methods 

  console.log(Person.favoriteSkills());
