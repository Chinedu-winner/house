import React from 'react'

const Home= ()=> {
    const studentArray =[
        {
            id: 7,
            email:'cewtar@gmail.com',
            nickName: "universal429"
        }, 
        {
            id: 12,
            email:'deeguatrr@gmail.com',
            nickName: "debugger33"
        },
        { 
            id: 5,
            email:'fathus@gmail.com',
            nickName: "dathid4"
        }, 
        {
            id: 7,
            email:'cewtar@gmail.com',
            nickName: "universal429"
        }, 
    ]


    if (studentArray === typeof(studentArray)){
        console.log(12345678);        
    }else {
        console.log(97865432);        
    }

    studentArray===typeof(studentArray)?console.log(1234567):console.log(31);

//binary operator two  operator e.g || + -  
// uniary operator one operator
// tenary operator one operands 

    console.log(studentArray);
    
    return (
    <>
    studentArray

    {studentArray.map((item, i)=>(
        <>
    <div key= {item.id}>
        <h1>{item.nickname}</h1>
        <h1>{item.email}</h1>
        <small>{item.id}</small>
    </div> 

    </>
    ))}
    <>
    <h1>The Gold  of the land</h1>
    </>
    </>
    )
}

export default Home
