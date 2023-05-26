import axios from "axios";
import { useState,useEffect,createContext,useContext } from "react";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser]=useState({});
    
    async function fetchUser(){
        const response= await axios.get("http://localhost:8080/auth/api/current_user")
        setUser(response)
    }

    useEffect(()=>{
        fetchUser()
        console.log(user)
    },[])

    return (
        <userAuthContext.Provider value={user}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
  }