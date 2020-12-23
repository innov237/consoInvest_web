class Storage {
    getItem=(id: any)=> JSON.parse(localStorage.getItem(id) || 'null')
    setItem=(data: any)=>localStorage.setItem(data.id, JSON.stringify(data))
}

export default Storage