console.log('bai1')

let A1 = [1, 2, 'a']
console.log(A1)
let A2 = [1, 3, 'b']
console.log(A2)
function mergeArray(A1, A2) {
    let result_arr = []
    for (let i = 0; i < A1.length; i++) {
        if (result_arr.indexOf(A1[i]) == -1) {
            result_arr.push(A1[i])
            // console.log(result_arr)
        }
    }
    for (let i = 0; i < A2.length; i++) {
        if (result_arr.indexOf(A2[i]) == -1) {
            result_arr.push(A2[i])
            // console.log(result_arr)
        } else {
            result_arr.splice(result_arr.indexOf(A2[i]), 1)
            console.log(result_arr)
        }
    }
    return result_arr
}

console.log(mergeArray(A1, A2))


console.log('bai2')


const teams = [{
    name: "Arsernal",
    points: 99,
    GD: 46
}, {
    name: "Chelsea",
    points: 96,
    GD: 59
}, {
    name: "Manchester United",
    points: 99,
    GD: 46
}, {
    name: "Liverpool",
    points: 99,
    GD: 46
}]
function compare(a, b) {
    if (a.points < b.points) {
        return 1;
    }
    if (a.points > b.points) {
        return -1;
    }
    if (a.points === b.points) {
        if (a.GD < b.GD) {
            return 1
        }
        if (a.GD > b.GD) {
            return -1;
        }
    } if (a.points === b.points && a.GD === b.GD) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
    }

}

console.log(teams.sort(compare));