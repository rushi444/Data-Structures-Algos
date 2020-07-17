const majorityElement = nums => {
    let counterObj = {}
    let res = null

    for (let num of nums) {
        if (counterObj[num]) {
            counterObj[num]++
        } else {
            counterObj[num] = 1
        }
        if (res === null || counterObj[num] > counterObj[res]) {
            res = num
        }
    }
    return res
};