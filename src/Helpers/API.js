import  BASE_API  from './../config'

const apiFetchPost = async (endpoint, body) => {
    const res = await fetch(BASE_API+endpoint, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    const json = await res.json()
    return json
}

const API = {
    login:async (email, password) => {
        const json = await apiFetchPost(
            '/user/signin',
            { email, password }
        )
        return json
    },
    insert: async (params) => {
        const json = await apiFetchPost(
            '/api/insert.php',
            {params}
        )

        return json
    }
}

export default ()=>API