function getData() {
    var userInput = (document.getElementById("input")).value.toUpperCase()
    //console.log(userInput)
    var congressAPIKey = "Ygwt69b5mZ3NMSQLDzE7N5KO8it0JNv1aLbQc4Xh"
    var congressAPIUrl = `https://congress.api.sunlightfoundation.com/legislators?state=${userInput}&per_page=50&page=1&apikey=${congressAPIKey}&mode`

    fetch(congressAPIUrl)
        .then(function(data) {
            return data.json()
        })
        .then(
            function(json) {
                // var length = (json.results.length)-1
                // length = 20 so use 19
                console.log(json.results["0"].first_name)
                console.log(json.results["0"].last_name)


                // var congPath = json.results["0"].state_name
                // cong.innerHTML = `${congPath}`
                // document.body.appendChild(cong)
                
                
                // var human= document.createElement("div")
                // human.setAttribute("class","row")
                // document.body.appendChild(human)

                for (var i = 0; i < json.results.length; i++) {
                    
                    var first = json.results[i].first_name
                    var last = json.results[i].last_name

                    var chamber = json.results[i].chamber
                    var party = json.results[i].party
                    
                    var phone = json.results[i].phone
                    
                    var human = document.getElementById("human")
                    
                    var column= document.createElement("div")
                    column.setAttribute("class","col-md-4")
                    human.appendChild(column)
                    
                    var card = document.createElement("div")
                    card.setAttribute("class", "card")
                    card.style.width= "20rem"
                    column.appendChild(card)
                    
                    var cardBody = document.createElement("div")
                    cardBody.setAttribute("class", "card-body")
                    card.appendChild(cardBody)
                    
                    var cardH = document.createElement("h4")
                    cardH.setAttribute("class", "card-title")
                    cardH.innerHTML = `${first} ${last}`
                    cardBody.appendChild(cardH)
        
                    var cardSpace = document.createElement("p")
                    cardSpace.setAttribute("class", "card-Space")
                    cardSpace.innerHTML=`${chamber}`
                    cardH.appendChild(cardSpace)
                    
                    var cardp = document.createElement("p")
                    cardp.setAttribute("class", "card-text")
                    cardp.innerHTML = `${party}`
                    cardSpace.appendChild(cardp)
                    
                    var cardPhone = document.createElement("p")
                    cardPhone.setAttribute("class", "card-phone")
                    cardPhone.innerHTML = `${phone}`
                    cardp.appendChild(cardPhone)
                    
                    // var cardA = document.createElement("a")
                    // cardA.setAttribute("class", "btn btn-primary ")
                    // cardp.appendChild(cardA)
                    
                    
                    


                    // var fullName = document.getElementById(`gov${i}`)
                    // var description = document.getElementById(`government${i}`)
                    
                    

                    

                }
            })
}
