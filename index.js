// Write your solution in this file!
const employee = {
    name: 'a',
    streetAddress: 'b'
}
const updateEmployeeWithKeyAndValue = (obj, key, value) => {
   return Object.assign({}, obj, { [key]: value })
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    return Object.assign(employee, {[key]: value});
}
const deleteFromEmployeeByKey = (obj, key, value) => {
    let x = Object.assign({}, obj, {[key]:value});
    delete x.key;
    return x

}
const destructivelyDeleteFromEmployeeByKey = (obj, key, value) => {
    let x = Object.assign(obj, {[key]:value});
    delete x.key;
    return x

}