import React, { useState } from 'react'
import styled from 'styled-components'

const SingUpForm = () => {

    const [formValues, setFormValues] = useState({
        Name: '',
        email: '',
        password: '',
        Confirmpassword: '',
    })
    const [errors, setErrors] = useState({
        Name: '',
        password: '',
        email: '',
        Confirmpassword: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
const validateForm = () => {
        const { Name, email, password, Confirmpassword } = formValues
        let isValid = true
        const emailRegex = /^[\w-]+(\.[\w+])*@([\w-]+\.)+[a-zA-Z]{2,7}$/

        let newErrors = {
            Name: '',
            password: '',
            email: '',
            Confirmpassword: '',
        }
        if (!Name.length) {
            newErrors.Name = "Name cannot be empty"
            isValid = false
        }

        if (!emailRegex.test(email)) {
            newErrors.email = 'email is invalid'
            isValid = false
        }
        if (!password.length <= 7) {
            newErrors.password = "password must be greater than 7 character"
            isValid = false
        }
        if (password !== Confirmpassword) {
            newErrors.Confirmpassword = "password do not match"
            isValid = false
        }
        setErrors(newErrors)
        return isValid
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       if(validateForm()){
        console.log("form submitted successfully")
       }
    }






return (

  
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' name="Name" onChange={handleChange} value={formValues.Name}  />
                <p className='error'>{errors.Name}</p>
                <input type="email" placeholder='Enter Your Email' name="email" onChange={handleChange} value={formValues.email} />
                <p className='error'>{errors.email}</p>
                <input type="password" placeholder='Enter Your password' name="password" onChange={handleChange} value={formValues.password} required />
                <p className='error'>{errors.password}</p>
                <input type="password" placeholder='Confirm Password' name="Confirmpassword" onChange={handleChange} value={formValues.Confirmpassword} required />
                <p className='error'>{errors.Confirmpassword}</p>
                <button type='submit'>Sign Up</button>

            </form>
        </Wrapper>
    
)
}

export default SingUpForm

const Wrapper = styled.div`
margin-top: 24px;
font-family: Sans-serif;


form{
    display: flex;
   flex-direction: column;
    align-items: center;
    justify-content: center;
}
input{
    padding:  8px;
    font-size: 18px;
margin-bottom: 6px;
width: clamp(200,40%,400px)
}

button{
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #ffff;
    cursor: pointer;
    margin-top: 24px;
    
    
    
    &: hover{
        opacity: 0.8;
    }
    .error {
		margin: 0 0 24px 0;
		color: red;
	}
}
`


