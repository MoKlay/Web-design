function Factorial(num) {
    let result = 1;
    if (typeof num == 'number') {
        if (num == 0) return 0
        for (var i = 1; i <= Math.abs(num); i++)  result *= i
        return result
    } else return 'Please enter a number'
}

function ListHTML(arr) {
    document.write("<ul>");
    for (let i = 0; i < arr.length; i++) {
        document.write("<li>" + arr[i] + "</li>");
    }
    document.write("</ul>");
}

function fred(str) {
    return "<div class='red'>" + str + "</div>"
}
function fblue(str) {
    return "<div class='blue'>" + str + "</div>"
}
function fstr(str) {
    let arr = '';
    str.forEach(element => {
         arr += element + ' '
    });
    return arr 
}

function flist(str) {
    let list = '<ul>';
    str.forEach(element => {
        list += "<li>" + element + "</li>"
    })
    list += '</ul>';
    return list
}

function read_data() {
    let arr = [];
     while (true) {
		let str = prompt('Enter data')
		if (str == '' || str == null) break
		else arr.push(str)
	}
    return arr
}

function fgener() {
    let mas = [], count = 0
    function findmass(str) {
        let bool = false;
        mas.forEach(element => {
            if (element == str) {
                count++
                bool = true
            }
        })
        if (bool == false) mas.push(str)
        console.log(mas)
        console.log(count)
        return bool
    }
    return findmass
}

function work5() {
let massf = [x => Math.abs(x), y => Math.abs(y) * -1, z => Math.pow(z, 2)]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

arr.forEach(element => {
    massf.forEach(mass => {
       document.body.innerHTML += mass(element) + '<br>';
    })
    document.body.innerHTML += '<br>'
})
}