backendUrl = "http://localhost:3000/"


async function answer1() {
    const response = await fetch(backendUrl + "answer1");
    const result = await response.json()
    
    var output = []
    result.forEach((data) => {
        output.push(data)
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer2() {
    const city = document.getElementById("answer2_select").value
    const response = await fetch(backendUrl + "answer2?city="+ city)
    const result = await response.json()
    document.getElementById("outputbox").innerHTML = result
}

async function answer3() {
    const response = await fetch(backendUrl + "answer3")
    const result = await response.json()
    document.getElementById("outputbox").innerHTML = result
}

async function answer4() {
    const city = document.getElementById("answer4_select").value
    const response = await fetch(backendUrl + "answer4?gas="+ city)
    const result = await response.json()

    var output = []
    result.forEach((data) => {
        output.push("<p>" + data._fields[0].properties.name + ": (" + data._fields[1] + ")</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer5() {
    const response = await fetch(backendUrl + "answer5")
    const result = await response.json()
    
    var output = []
    result.forEach((data) => {
        output.push("<p>" + data._fields[0].properties.name + ": (" + data._fields[1] + ")</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer6() {
    const response = await fetch(backendUrl + "answer6")
    const result = await response.json()
    
    var output = []
    result.forEach((data) => {
        output.push("<p>" + data._fields[0] + ": (" + data._fields[1] + ")</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer7() {
    const response = await fetch(backendUrl + "answer7")
    const result = await response.json()

    var output = []
    result.forEach((data) => {
        output.push("<p>City: " + data._fields[0].properties.city + ". Organisation: "+ data._fields[1].properties.name +"</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer8() {
    const response = await fetch(backendUrl + "answer8")
    const result = await response.json()
    console.log(result)
    var output = []
    result.forEach((data) => {
        output.push("<p>City: " + data._fields[0] + ". Region: "+ data._fields[1] +"</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer9() {
    const response = await fetch(backendUrl + "answer9")
    const result = await response.json()

    var output = []
    result.forEach((data) => {
        output.push("<p>City: " + data._fields[0] + ". Year: "+ data._fields[1] +". Emission baseline: " + data._fields[2] + "</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}

async function answer10() {
    const response = await fetch(backendUrl + "answer10")
    const result = await response.json()
    console.log(result)
    var output = []
    result.forEach((data) => {
        output.push("<p>City: " + data._fields[0] + ". Count: "+ data._fields[1].low +"</p>")
    })
    document.getElementById("outputbox").innerHTML = output
}
