import React from 'react'

const LoginValidation = () => {

    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "" ){
        error.email = "Email tidak boleh kosong"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email tidak cocok"
    }
    else {
        error.email = ""
    }

    if (values.password === "" ){
        error.password = "Password tidak boleh kosong"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password tidak cocok"
    }
    else {
        error.password = ""
    }
    return error

}

export default LoginValidation