import React, { useEffect } from 'react'
import axios from 'axios'

function Login(){
    return (
        <div className='w-[20em] h-10 rounded-md bg-slate-500 m-auto mt-10 font-bold'>
            <a href='http://localhost:8080/auth/google'>signup with google</a>
        </div>
    )
}

export default Login