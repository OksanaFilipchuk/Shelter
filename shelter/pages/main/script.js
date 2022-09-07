//burger
let burgerBtn = document.querySelector('.burger-icon');
let burgerMenu = document.querySelector('.burger-list');
let logo = document.querySelector('.logo');
let body = document.querySelector('.body');
let background = document.querySelector('.burger-nav');
let li = document.querySelectorAll('.link')

burgerBtn.addEventListener('click', function(){
    burgerMenu.classList.toggle('burger-list_active');
    background.classList.toggle('burger-nav_active');
    logo.classList.toggle('logo_active');
    burgerBtn.classList.toggle('burger-icon_active');
    body.classList.toggle('body_active');
});
window.onclick = function(event){
    if(event.target == background){
        burgerMenu.classList.remove('burger-list_active');
        background.classList.remove('burger-nav_active');
        logo.classList.remove('logo_active');
        burgerBtn.classList.remove('burger-icon_active');
        body.classList.remove('body_active');
    }
}
let closeMenu = function closeMenu(){
        burgerMenu.classList.remove('burger-list_active');
        background.classList.remove('burger-nav_active');
        logo.classList.remove('logo_active');
        burgerBtn.classList.remove('burger-icon_active');
        body.classList.remove('body_active');
}
li.forEach((el) => el.addEventListener('click', closeMenu));

let json = [ {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }];

  //pop-up
  let petCard = document.querySelectorAll('.pet');
  let popUp = document.querySelector('.pop-up');

function popUpShow (event) {
  for(let i = 0; i<json.length; i++){
      
  if(event.target == document.querySelector('.pet-'+ json[i].name.toLowerCase())) {     
      let popUpBox = document.createElement('div');
      popUpBox.className = 'pop-up-box';
      popUp.append(popUpBox);

      let popUpButton = document.createElement('div');
      popUpButton.className = "pop-up-button";
      popUpButton.textContent = "×";
      popUpBox.appendChild(popUpButton);
      
      
      let img = document.createElement('img');
      img.src = "../../assets/images/pets-"+json[i].name.toLowerCase()+".png";
      popUpBox.appendChild(img);

      let popUpContent = document.createElement('div');
      popUpContent.className = "pop-up-content";
      popUpBox.appendChild(popUpContent );

      let popUpH3 = document.createElement('h3');
      popUpH3.textContent = json[i].name;
      popUpContent.appendChild(popUpH3);

      let popUpH4 = document.createElement('h4');
      popUpH4.textContent = json[i].type + ' - ' + json[i].breed;
      popUpContent.appendChild(popUpH4);

      let popUpP = document.createElement('p');
      popUpP.textContent = json[i].description;
      popUpContent.appendChild(popUpP);

      let list = document.createElement('ol');
      popUpContent.appendChild(list);
      list.className = "list";

      let popUpAge = document.createElement('li');
      popUpAge.textContent = 'Age: ' + json[i].age;
      list.appendChild(popUpAge);

      let popUpInoculations = document.createElement('li');
      popUpInoculations.textContent = 'Inoculations: ' + json[i].inoculations;
      list.appendChild(popUpInoculations);

      let popUpDiseases = document.createElement('li');
      popUpDiseases.textContent = 'Diseases: ' + json[i].diseases;
      list.appendChild(popUpDiseases);

      let popUpParasites = document.createElement('li');
      popUpParasites.textContent = 'Parasites: '+ json[i].parasites;
      list.appendChild(popUpParasites);
      
      }
  }
  
  popUp.classList.toggle('pop-up_active');
  body.classList.toggle('body_active');
}

petCard.forEach((el) => el.addEventListener('click', popUpShow))

window.onclick = function(event){
  if(event.target == popUp){
  popUp.classList.remove('pop-up_active');
  body.classList.remove('body_active');
  popUpBox = document.querySelector('.pop-up-box');
  popUpBox.remove()
  }
}

popUp.onclick = function(e){
  
  var target = e.target;
  if(target.className == 'pop-up-button'){
      popUp.classList.remove('pop-up_active');
      body.classList.remove('body_active');
      popUpBox = document.querySelector('.pop-up-box');
      popUpBox.remove()
  }

}