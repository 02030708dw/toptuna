export const isObjEmpty = (obj) => {
    for (let objKey in obj) {
         if (obj.hasOwnProperty(objKey)) return false
    }
    return true
}