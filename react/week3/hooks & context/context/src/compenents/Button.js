import React,{useContext} from "react"
import {ThemeContext} from "./ThemeContext"

export default function Button(){
    const {bahasa,tema,onChangeTheme} = useContext(ThemeContext)
    
    return(
        <div style={{
            width:"100vw",
            height:"100vw",
            margin:"0px",
            backgroundColor:tema==="dark"?"black":"white",
            color:bahasa==="indonesia"?"black":"white",
            textAlign:"center",
            }}>
            <div>
                <h1>{bahasa=="indonesia"?"Halo Dunia":"Hello World"}</h1>
            </div>
            <button onClick={()=>onChangeTheme(bahasa)}>{bahasa=="indonesia"?"Ubah ke bahasa Inggris":"Change language to Indonesia"}</button>
        </div>
    )
}