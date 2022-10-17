document.querySelector('button').addEventListener('click', getHero)
function getHero(){
    
    
    fetch(`https://superhero-quotes.herokuapp.com/grab?banner=mcu`)
    
    .then(res => res.json())
    .then( data => {
        let hero =  data.Items[0].data.author + ', marvel comics'
       console.log(data)
       document.querySelector('h2').innerText= hero
       document.querySelector('span').innerText= data.Items[0].data.quote
            console.log(hero)
     fetch(`https://api.unsplash.com/search/photos/?query=${hero}&client_id=GwiMkwXSy_YFpxKqh6kpAMie9gqHtyCutHdaWlzAcm4`)
       .then(res => res.json())
       .then(data => {
        console.log(data)
        document.querySelector('img').src = data.results[0].urls.small
       })
    })
}