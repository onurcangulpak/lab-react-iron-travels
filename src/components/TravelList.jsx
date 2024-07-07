import React from "react";
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import './TravelList.css'

const TravelList = () => {
  const [tripState, setTripState] = useState(travelPlansData);

  const handleDeleteTrip = (tripId) => { 
    setTripState(tripState.filter(trip => trip.id !== tripId))
  }


  return (
    <div className="gen">
      {tripState.map((trip,index) => {
        return ( 
        <div key={trip.id} className="trip" style={{display:"flex"}}>
            <div className="img"> <img src={trip.image} alt="imgofctry" style={{width:"200px"}}/> </div>
           <div className="info"> 
            <h3 className="destination"> {trip.destination}({trip.days} Days)</h3>
            <h3 className="description"> {trip.description}</h3>
            <h3 className="price"> Price: {trip.totalCost}€ </h3>  
            {trip.totalCost <= 350 ? <span style={{backgroundColor: "green",color:"white",padding:"4px",
        marginBottom: "5px",}}>Great Deal!</span> : null}
            {trip.totalCost >= 1500? <span style={{backgroundColor: "#FFD700",color:"white",padding:"4px",
        marginBottom: "5px",}}>Premium</span>: null}
            {trip.allInclusive ? <span style={{backgroundColor: "#FFD700",color:"white",padding:"4px",
        marginBottom: "5px",}}>All Inclusive</span>: null}
        <button style={{backgroundColor: "#CD853F",color:"white",padding:"4px",
        marginBottom: "5px",}} onClick={()=> handleDeleteTrip(trip.id)} >Delete</button>
            </div>


          
       
        </div> )
      
      })}
    </div>
  );
};

export default TravelList;

