import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const baseUrl = "https://catfact.ninja/fact"

function CatInfor() {
    const [count,setCount] = React.useState(0)
    const [name,setName] = useState("User");

    const [cat, setCat] = React.useState({ fact: "", length: 0})

    // useEffect(() => {
    //     axios.get(baseUrl).then((response) => {
    //         setCat({
    //             fact: response.data.fact,
    //             length: response.data.length
    //         })
    //         console.log(response.data.fact)
    //     })
    // },[])

    function getCat(){
        axios.get(baseUrl).then((response) => {
            setCat({
                fact:response.data.fact,
                length: response.data.length
            })
            console.log(response.data)
        })
    }
    if (!cat) return null;


  return (
    <div>
        <h3 >fact: {cat.fact}</h3>
        <h4>Length: {cat.length}</h4>
        <p>Hello {name}</p>
        <h1>count is: {count}</h1>
        <button className=" rounded-md bg-slate-800   border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 " 
                type="button"
                onClick={() => setCount((count) => count+1)}>
                Increase
        </button>
        <button className=" rounded-md bg-slate-800   border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 " 
                type="button"
                onClick={() => setCount((count) => count-1)}>
                Decrease
        </button>
        <button className= "  rounded-md bg-slate-800  border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 " 
            type='button' 
            onClick={() => setName("Notto")}>
            Update name!
        </button>
        <button className= "rounded-md bg-slate-800  border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 " 
            type='button' 
            // onClick={() => axios.get(baseUrl).then((response) => {
            //     setCat({
            //         fact: response.data.fact,
            //         length: response.data.length
            //     })
            //     console.log(response.data.fact)
            // })}
            onClick={getCat}>
            getCat
        </button>

    </div>
    




  )
}

export default CatInfor