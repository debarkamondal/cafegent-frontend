import React from 'react'
const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

const menu = (props: object) => {

    ("data" in props)? console.log("hey"):null
  return (
    <div></div>
  )
}

export const getServerSideProps = async ()=>{
    const url: string = `http://localhost:5000/api/menu/getitems`;
    // console.log(url)
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return {
        props: {data}
    }
}

export default menu