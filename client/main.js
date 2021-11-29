function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("circTxt")[classIndex];
  
    var deg = 180 / txt.length,
      origin = -100;
  
    txt.forEach((ea) => {
      ea = `<p  style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
      classIndex.innerHTML += ea;
      origin += deg;
    });
  }
  
  circularText("  Silver Charm", 300, 0);




const puppiesContainer = document.querySelector('#puppies-container')

const puppyButton = document.querySelector('#puppies-btn')

const baseURL = `http://localhost:4444/api/puppies`

const puppiesCallback = ({ data: puppies }) => displayPuppies(puppies)
const errCallback = err => console.log(err.response.data)

const getPuppies = () => axios.get(baseURL).then(puppiesCallback).catch(errCallback)

function createPuppyCard(puppies) {
    const puppyCard = document.createElement('div')
    puppyCard.classList.add('puppy-card')

    puppyCard.innerHTML = `<img src=${puppies.imageSource}/>`

    puppiesContainer.appendChild(puppyCard)
}

function displayPuppies(arr) {
    puppiesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPuppyCard(arr[i])
    }
}

puppyButton.addEventListener('click', getPuppies)