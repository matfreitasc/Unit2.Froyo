// This is the main function that will be called by the index.js file

const placeOrder = () => {
    let orderList = document.getElementById('order-list')
    let orderSection = document.getElementById('order-section')
    let flavors = document.getElementById('flavors').value
    if (flavors === '') {
        alert('Please enter a flavor(s)')
        return
    }
    let orderSummary = countFlavors(flavors)
    orderSummary.forEach((flavor) => {
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerText = `${flavor.count} ${flavor.flavor} flavor Froyo`
        orderList.appendChild(li)
    })
    orderSection.classList.remove('opacity-0')
    orderSection.classList.add('opacity-100')
}

/**
 * This function will take in an object containing the flavors and the quantity of each flavor to be ordered
 * @param {string} flavors - An object containing the flavors and the quantity of each flavor to be ordered
 * @returns {{flavor:string, count:number}} - An object containing the flavors and the quantity of each flavor that was ordered
 */

const countFlavors = (flavors) => {
    let flavorsArray = flavors.replace(/ /g, '').split(',')
    // loops through the flavorsArray and count the number of times each flavor appears in the array and store it in an object called flavorCount and return it from the function as an array of objects
    let flavorCount = []
    flavorsArray.forEach((flavor) => {
        let flavorExists = flavorCount.find((item) => item.flavor === flavor)
        if (flavorExists) {
            flavorExists.count++
        } else {
            flavorCount.push({ flavor: flavor, count: 1 })
        }
    })
    return flavorCount
}
