import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mohitmourya01').then(response => response.json()).then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
        <img className='m-auto ' src={data?.avatar_url}  width={300} alt="Git picture" />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
      const response = await fetch('https://api.github.com/users/mohitmourya01')
      return response.json()
}