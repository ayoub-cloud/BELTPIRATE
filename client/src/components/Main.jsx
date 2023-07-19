import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'




const Main = () => {

    const navigate = useNavigate();
    const [pirates, setPirates] = useState([])


   
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((response) => {
                  console.log(response.data)
                setPirates(response.data)
            })
            
            .catch(err => console.log(err))
    }, [])

    

      const goToUpdate=(pirateMongoID)=>{
          console.log(pirateMongoID)
          navigate("/pirate/"+ pirateMongoID )
      }

   
    
      const goToDelete=(deleteID)=>{
        
        axios.delete("http://localhost:8000/api/Pirates/" + deleteID +"/delete")
        .then(response=>{
          console.log("DELETED SUCCESSFELY",response.data)
        
          setPirates(pirates.filter((pirate)=>pirate._id !== deleteID))
        })
        .catch(err=>console.log(err))
    }


    return (
        <div className="container col-6 " >
           <div  style={{backgroundColor:"#783f04"}} >
            <h1>PIRATE CREW</h1>
           </div>
         
          <button className ="btn btn-success"><Link style={{textDecoration:"none" , color:"white"  }}    to={"/pirate/new"} > Add Pirate </Link></button>

             {pirates.map((onePirate)=>{
         return(


          <div className = "border bg-white" key={onePirate._id}>
            
            <h2 >{onePirate.name}</h2>
            <div  style={{ }}    >   
            <img src={onePirate.image} alt=""  width="130" height="130" />

            <button className ="btn btn-primary"  onClick={()=>goToUpdate(onePirate._id)}>View Pirate</button>
            <button className ="btn btn-danger" onClick={()=>goToDelete(onePirate._id)}>Walk the Plank</button>
            </div>

           </div>
         )
       })}

        </div>
    )
}

export default Main