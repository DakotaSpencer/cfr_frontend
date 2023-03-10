import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(email, city, street, userstate, zip, phone, password, firstname, lastname) => {
        setIsLoading(true)
        setError(null)

        //post request
        const response = await fetch('/createuser', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "userEmail": email,
                "userCity": city,
                "userStreet": street,
                "userState": userstate,
                "userZip": zip,
                "userPhone": phone,
                "userPassword": password,
                "userFirstName": firstname,
                "userLastName": lastname
            })
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the user to local storage via json web token
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            //set isLoading to false
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}