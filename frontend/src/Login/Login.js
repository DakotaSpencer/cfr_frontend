import React from 'react'
import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const [errmsg, setErrmsg] = useState('');
    const emailregex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    const passwordregex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)

    const handleSubmit = async (e) => {
        console.log('Sttempting to login')
        e.preventDefault()
        try{
            if(!passwordregex.test(password) || !emailregex.test(email)){
                setErrmsg(`Email or password is incorrect`)
                console.log(errmsg)
            }
            else(setErrmsg(""))
            await login(email, password)
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className='pagediv'>
            <form className='login' onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <div className='spacecol'>
                    <div>Email:</div>
                    <input
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <div>Password:</div>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button disabled={isLoading} className='margintop'>Sign Up</button>
                    {errmsg && <div className='error'>{errmsg}</div>}
                </div>
            </form>
        </div>
    )
}

export default Login