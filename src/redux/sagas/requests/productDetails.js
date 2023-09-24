import axios from 'axios'; 

export const requestGetProduct = (data)=>{
    return axios.request({
        method:'get',
        url:'http://localhost:8081/book/list',
        headers:{Authorization: ` ${localStorage.getItem('authorization')}`}

    })
}

export function requestUpdateProduct(data){
    return axios.request({
        method:'put',
        url:`http://localhost:8081/book/${data.id}`,
        params:{price: data.price,
        ratings: data.ratings},
        headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

    })
}


export function requestCreateProduct(data){
    console.log ("data going to api post create", data)
    return axios.request({
        method:'post',
        url:`http://localhost:8081/book`,
        params:{image: data.image, 
            price: data.price,
        ratings:data.rating},
        headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

       


    })
}

export function requestDestroyProduct(data){
    return axios.request({
        method:'delete',
        url:`http://localhost:8081/book/${data.id}`,
        //headers: {"Access-Control-Allow-Origin": "*"}
        headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}
       

    })
}
