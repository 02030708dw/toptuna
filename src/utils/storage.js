const getStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}
const setStorage=(name,data)=>{
    localStorage.setItem(name,JSON.stringify(data))
}
const removeStorage=(name)=>{
    localStorage.removeItem(name)
}
const clearStorage=()=>localStorage.clear()
export {
    getStorage,setStorage,removeStorage,clearStorage
}