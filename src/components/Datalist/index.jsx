import React from 'react'

function DataList({data , handleDelete}) {
  return (
    <div>
       {
       data.map((data, index)=>{
        return(

          <div key={data.id} style={{
             display: "flex" ,
             justifyContent: 'space-around',
             border: "2px solid green"}}>
              <p>{index + 1}</p>
             <h4>{data.name}</h4>
             <h4>{data.age}</h4>

             <button onClick={() => handleDelete(data.id)}>Delete</button>
         </div>
       )
       }) 
    }
    </div>
  )
}

export default DataList