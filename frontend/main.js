backendUrl = "http://localhost:3000/"


async function answer1() {
    const response = await fetch(backendUrl + "answer1");
    const result = await response.json()
    
    var output = []

    result.recordset.forEach((data) => {
        output.push(data.cityName)
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer2() {
    const city = document.getElementById("answer2_select").value
    const response = await fetch(backendUrl + "answer2?city="+ city)
    const result = await response.json()
    
    var outputRaw = []
    var output = []

    result.recordset.forEach((data) => {
        if(data.population_year != 0 && outputRaw.includes(data.population_year) == false) {
            outputRaw.push(data.population_year)
            output.push("Population ("+ data.population_year +"): " + data.population)
        }
    })
    document.getElementById("outputbox").innerHTML = output
}

function answer3() {
    alert("Test")
}

function answer4() {
    alert("Test")
}

function answer5() {
    alert("Test")
}

function answer6() {
    alert("Test")
}

function answer7() {
    alert("Test")
}

function answer8() {
    alert("Test")
}

function answer9() {
    alert("Test")
}

function answer10() {
    alert("Test")
}