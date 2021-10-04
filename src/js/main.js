import "../scss/style.scss"

// Weather
const text1 = document.getElementById("place1")
const url1 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c95b8644a5ebf1539fcb7b57fd61c64a" //c95b8644a5ebf1539fcb7b57fd61c64a

let res1;

fetch(url1)
    .then(response => response.json())
    .then(weather => {
        res1 = weather
        fillHtml(res1)
    })
    .catch(err => console.log(err))


const fillHtml = (res1) => {
        text1.textContent = `Temperature: ${Math.round(res1.main.temp - 273)} deg, speed wind: ${res1.wind.speed} m/s, clouds: ${res1.weather[0].description}`
}

//People
const text_peo1 = document.getElementById("place_peo1")
const text_peo2 = document.getElementById("place_peo2")
const text_peo3 = document.getElementById("place_peo3")
const name1 = document.getElementById("name1")
const name2 = document.getElementById("name2")
const name3 = document.getElementById("name3")
const url2 = "data.json"

let res2;

fetch(url2)
    .then(response => response.json())
    .then(json => {
        res2 = json
        peopleHTML(res2);
    })
    .catch(err => console.log(err))

const peopleHTML = (res) => {
    name1.textContent = `${res[0].name}(age: ${res[0].age})`
    name2.textContent = `${res[1].name}(age: ${res[1].age})`
    name3.textContent = `${res[2].name}(age: ${res[2].age})`
    text_peo1.textContent = `Hobbies: ${res[0].hobbies}`
    text_peo2.textContent = `Hobbies: ${res[1].hobbies}`
    text_peo3.textContent = `Hobbies: ${res[2].hobbies}`
}

//Source3

const source_title = document.getElementById("sou_title")
const source_complete = document.getElementById("complete")
const id = document.getElementById("id")
let res3

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
      res3 = json
      sourceHTML(res3)

})

const sourceHTML = (res) => {
    source_title.textContent = `${res.title}`
    source_complete.textContent = `My resume is finished: ${res.completed}`
    id.textContent = `My id: ${res.userId}`
}
