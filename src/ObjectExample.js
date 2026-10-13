import React from "react";

const ObjectExample = () =>{

    const student =[{
        id:1,
        name:"Arun",
        age:21,
        department: "CSE",
        marks:90.5
    },
    {
        id:2,
        name:"bala",
        age:22,
        department: "CSE",
        marks:97.5
    },
    {
        id:1,
        name:"chandru",
        age:21,
        department: "CSE",
        marks:98
    }]
    {/*/const data= student.map((i)=>{ 
        return(
            <>
            {i.name}
            </>
        )
    })
    console.log(data)*/}

    const numbers = [1,2,3,4,5,6,7];
    const filtered = numbers.filter(
        function(x){
            return x > 5
        }
    )
    console.log(filtered)

    const datamark = student.filter((i) => i.marks > 95)
     console.log(datamark)

    
   const number=[1,2,3,4,5,6,7]
   console.log("pop",number.pop(),number)
   console.log("push",number.push(8),number)
   console.log("shift",number.shift(),number)
   console.log("unshift",number.unshift(1),number)


   const name = ["arun","bala","chandhuru","dinesh"]
   const result = name.slice(1,3)
   console.log("result",result,name)

    return (
        <>
         <thead>
                            <tr>
                            <th>NAME </th><br/>
                            <th>AGE </th><br/>
                            <th>MARK </th>
                            </tr>
                        </thead>
        {
            student.map((i) =>{
                return (
                    <>
                    <table>
                       
                        <tbody>
                            
                            <td>{i.name}</td><br/>
                            <td> {i.age} </td><br/>
                            <td> {i.marks} </td>
                        </tbody>
                    </table>
                    </>
                )
            })
        }
        </>

    )
        
    

}
export default ObjectExample;