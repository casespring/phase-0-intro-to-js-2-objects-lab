// Write your solution in this file!
const employee = {
    name: "Jake from Statefarm",
    streetAddress: "statefarm AVE"
};

function updateEmployeeWithKeyAndValue(obj, key, val) {
    return {...obj,
        [key]: val,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;

    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
  const newEmployee = {...obj}
   delete newEmployee[key]
   return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj
}