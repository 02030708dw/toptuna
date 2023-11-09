//utils.js

export const getSrc = (name) => {
    if (typeof name === 'undefined') return 'error.png'
    const path = `/src/assets/images/${name}/logo.png`
    // const modules = import.meta.globEager('/src/assets/images/*')
    // console.log(modules[path]?.default,path)
    return path
    /*const path = `../src/assets/images/${name}/logo.png`;
    const modules = import.meta.globEager("../../assets/images/!*");
    console.log(path,modules[path]?.default)
    return path;*/
}
