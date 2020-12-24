class Storage {
    setCategories=(data: any)=>localStorage.setItem("Categories", JSON.stringify(data))
    setAllProducts=(data: any)=>localStorage.setItem("Products", JSON.stringify(data))
    setProduct=(data: any)=>{
        let Product=JSON.parse(localStorage.getItem("Products") || "null")
        if(Product) {
            let newProduct=[...Product, data]
            localStorage.setItem("Products", JSON.stringify(newProduct))
        }
    }
    getCategories=()=>JSON.parse(localStorage.getItem("Categories") || 'null')
    getAllProducts=()=>JSON.parse(localStorage.getItem("Products") || 'null')
    //getProduct=(id: any)=> JSON.parse(localStorage.getItem(id) || 'null')
}

export default Storage