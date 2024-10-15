

class Api {
    url = 'https://dummyjson.com'

    getAllProducts() {
        return fetch(this.url + '/products')
        .then((res) => res.json())
    }

    

}


export const api = new Api()