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