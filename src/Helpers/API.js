import $ from 'jquery'
import  BASE_API  from './../config'

const apiFetchPost = async (endpoint, body) => {
    const res = await fetch(BASE_API+endpoint, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }).then(response => {
        return response.json()
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
    insert: async (numContest, name, cpf, terminal, valor, status, data) => {
       /* const json = await apiFetchPost(
            '/api/insert.php',
            {
                numContest,
                name,
                cpf,
                terminal,
                valor,
                status,
                data
            }
        )

        return json*/
        await $.ajax({
            method:'POST',
            url: 'https://contestacoes.000webhostapp.com/api/insert.php',
            contentType: 'application/json',
            cache: false,
            dataType: 'json',
            data:  JSON.stringify({
                numContest: numContest,
                name: name,
                cpf: cpf,
                terminal: terminal,
                valor: valor,
                status: status,
                data: data,
            })
        }).done( async data => {
            console.log(data);
            
            return data.json()
        }).fail( async error => {
            console.log(data);
            return error.json()
        })
       
    }
}

export default ()=>API