import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom';
// import logo from './image/logo1.png'
// import image from './diamond-heart@2x.png'
// import signin from './Signin';
function Signup() {
        const handleSubmit =(event)=>{
            event.preventDefault()
            alert("form");
        };
        const handleChange =(e) =>{
            e.preventDefault()

        }
        return(
            <>
            <FormContainer>
                <form onSubmit={(event) => handleSubmit(event)} >
                    <div className="Main">
                        <img src="./diamond-heart@2x.png" alt="diamond img" />
                        <h1>Chat On</h1>
                    </div>
                    
                    <input type="text" placeholder="Username" name="username" onChange={(e)=>handleChange(e)} />
                    <input type="email" placeholder="Your email" name="email" onChange={(e)=>handleChange(e)} />
                    <input type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e)} />
                    <input type="confirmPassword" placeholder="ConfirmPassword" name="confirmPassword" onChange={(e)=>handleChange(e)} />
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