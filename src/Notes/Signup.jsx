import React, {useState, useEffect} from "react";
// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from  'axios';
import { signupRoute } from "../utils/APIRoutes";
// import logo from './image/logo1.png'
// import image from './diamond-heart@2x.png'
// import signin from './Signin';

function Signup() {
        const navigate = useNavigate();
        const [values, setValues] =useState({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        const toastOptions={
            position: 'bottom-right',
            autoClose: 8000,
            pauseOnHover: true,
            draggable : true,
            theme:'white',
        }
        useEffect(()=>{
            if(localStorage.getItem('chat-user')){
            navigate('/signin')
            }
        });
        const handleSubmit =async(event)=>{
            event.preventDefault()
            // alert("WElLCOME");
            // api calling 
            if(handleValidation()){
                console.log('in Validation' , signupRoute)
                const{username , email , password} =values;
                const{data} = await axios.post(signupRoute, {
                    username,
                    email,
                    password,
                   
                });
                if(data.status === false){
                    toast.error(data.msg, toastOptions);
                }
                if(data.status === true){
                    localStorage.setItem(
                        'chat-user',
                        JSON.stringify(data.user)
                    );
                    navigate('/signin');
                }
            
            };
        };
        const handleValidation=()=>{
            const{username , email , password , confirmPassword} =values;
            if(password !== confirmPassword){
                toast.error(
                    'password not match' , toastOptions
                );
                return false;
                
            }else if(username.length<4){
                toast.error(
                    "Username should be greater than 4 words", toastOptions
                )
            }else if(password.length<4){
                toast.error(
                    "Password should be greater than 4 letter", toastOptions
                )
                return false;
            }else if(email===""){
                toast.error(
                    "Email required"
                )
                return false;
            }
            return true;
        }
        const handleChange =(event) =>{
            setValues({...values, [event.target.name]: event.target.value})
        }

        return(
            <>
            <FormContainer>
            <ToastContainer />
                <form onSubmit={(event) => handleSubmit(event)} >
                    <div className="Main">
                        <img src="./diamond-heart@2x.png" alt="diamond img" />
                        <h1>Chat On</h1>
                    </div>
                    
                    <input type="text" placeholder="Username" name="username" onChange={(e)=>handleChange(e)} />
                    <input type="email" placeholder="Your email" name="email" onChange={(e)=>handleChange(e)} />
                    <input type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e)} />
                    <input type="password" placeholder="confirmPassword" name="confirmPassword" onChange={(e)=>handleChange(e)} />
                    <button type="submit" >Join us</button>
                    <span>Already Join us ?<Link to='/Signin'>Signin</Link> </span>
                     
                </form>
            </FormContainer>
            </>
        )
}

const FormContainer = styled.div`
        height:100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        align-items: center;
        background-color: grey;
        
        form{
            display: flex;
            border-radius: 2rem;
            flex-direction: column;
            gap: 1rem;
            background-color: black;
            padding: 3rem 5rem;
            .Main{
                display: flex;
                align-items: center;
                gap: 1rem;
                justify-content:center;
                img{
                    height:3rem;
                }
                h1{
                    color:grey;
                    text-transition : uppercase;
                }
    
            }
            input{
                background-color: transparent;
                padding: 1rem;
                border: 0.1rem solid purple;
                border-radius: 0.4rem;
                color: blue;
                width: 100%;
                font-size: 1rem;
                &:focus{
                    border: 0.1rem solid #997af0;
                    outline: none;

                } 
            }
                button{
                    background-color: purple;
                    color: white;
                    padding: 1rem 2rem;
                    border: none;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 1rem;
                    font-size: 1rem;
                    &: hover{
                        background-color: blue;
                    }

                }
                span{
                     color: white;
                     text-transform: uppercase;
                     gap: 1.5rem;
                     a{
                        color: blue;
                        
                        text-decoration : none;
                        font-weight: bold;
                     }
                }
                
            }
        }
        `;

export default Signup