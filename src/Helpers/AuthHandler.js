const Cookie = require('js-cookie')

export const isLogged = () => {
    let token = Cookie.get('token')
    return (token) ? true : false
}

export const doLogin = (token, rememberPassword = false) => {
    if(rememberPassword){
        Cookie.set('token', token, { expires : 999 })
    }
}