getData("https://opendata.rdw.nl/resource/r3rs-ibz5.json")
getData("https://opendata.rdw.nl/resource/t5pc-eb34.json")

function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(fetchedData => useData(fetchedData))
}

function useData(data){
    const paymentMethods = formatData(data, "paymentmethod")
    const areaId = formatData(data, "areaid")
    console.log(paymentMethods.sort())
    console.log(areaId.sort())
}

function formatData(data, key){
    return data.map(result => result[key])
}

  //dit zet de resultaten in html als een UL
    //slide = per item in de array een functie 
    //forEach voert functie binnen de parentheses uit voor elk item in de array
    //document.querySelector(".paymentmethod").innerHTML = paymentMethods