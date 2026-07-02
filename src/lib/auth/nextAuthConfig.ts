import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from 'next-auth';

import { jwtDecode } from "jwt-decode";



export const NextAuthConfig:NextAuthOptions={
    providers :[
        //Google() ,
         CredentialsProvider({
        name:'Abdo_Emad',
        credentials :{
            email:{type:'text' ,   placeholder:'Enter Your Email'},
            password:{type:'text', placeholder:'Enter Your Email'}
        },
        authorize:async (credentials)=>
            {
            const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
            method : 'POST',
           body:JSON.stringify(credentials),   
           headers : {'Content-type' : 'application/json'}
          })
         const data = await response.json()
         if (data.message=="success"&& data.user) 
            {
                const {id} = jwtDecode(data.token) as {id:string}
            return {
                //id:data.user.email,
           id: id,  /*الوحيد اللي اجباري الباقي تحت اختياري  unique  لازم ارجع id*/ 
           email:data.user.email,
           name:data.user.name,
           Token:data.token

        }
         }
         else{return null}
        }
          
    })],
    session: {
  strategy: "jwt",
},
secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
    jwt:({token,user})=>{
        if(user)
        {
            token.token=user.Token
            token.id=user.id
        }
      
        return token
    },
    session:({session,token,user})=>{
       //session.token=token.token
       // session.id = token.id

      session.user.id=token.id
    
        return session
    }
    },
    pages : {signIn:'/Login'}
    
}   