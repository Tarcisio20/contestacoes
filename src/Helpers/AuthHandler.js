const Cookie = require('js-cookie')

export const isLogged = () => {
    let token = Cookie.get('token')
    //return (token) ? true : false
    return true
}

export const doLogin = (token, rememberPassword = false) => {
    if(rememberPassword){
        Cookie.set('token', token, { expires : 999 })
    }else{
        Cookie.set('token', token)
    }
}