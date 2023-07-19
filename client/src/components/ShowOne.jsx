import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

const ShowOne = (props) => {


    const { id } = useParams();
    const [thisPirate, setThisPirate] = useState(null);

    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)

            .then((response) => {
                setThisPirate(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (

        <div >
                   

                  

            {
                thisPirate ? (
                    <> 
                    <div>

                    </div>
                      <h3 style={{backgroundColor:"#783f04"}} > {thisPirate.name} </h3>
                        <img src={thisPirate.image} alt="" width="130" height="130" />


                      <h5>About</h5>
                    <div>

                            <h5> Position:  {thisPirate.crewposition}</h5>
                            <p> Treasure: {thisPirate.treasure}</p>
                            {/* <div style={{display: "flex" , justifyContent: "center" ,alignItems: "center"}} > */}

                            <p> Peg Leg:    {thisPirate.pegleg ?   "Yes" : "No"  } </p>
                          
                            {/* {thisPirate.pegleg ? <button style={{dColor:"#cf2a27"}}>Yes</button> : <button style={{dColor:"#cf2a27"}}>No</button>  } */}
                            <Button variant="danger">no</Button>{' '}
                            {/* </div> */}

                            <p> Eye Patch:   {thisPirate.eyepatch   ?    "Yes" : "No"  }  </p>
                            {/* {thisPirate.eyepatch ? <button>Yes</button> : <button>No</button>  } */}
                            <Button variant="success">Yes</Button>{' '}

                            <p> Hook Hand:     {thisPirate.hookhand    ?    "Yes" : "No" }  </p>
                            {/* {thisPirate.hookhand ? <button>Yes</button> : <button>No</button>  } */}
                            <Button variant="success">Yes</Button>{' '}
                        </div>

                    </>
                ) : "Loading........"
            }

        </div>
    )

}
export default ShowOne