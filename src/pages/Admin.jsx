import {useState} from "react";
import api from "../api";


export default function Admin(){


const [id,setId]=useState("");

const [reason,setReason]=useState("");



function serve(){


api.put(

"/admin/serve/"+id

);


alert("Completed");


}



function skip(){


api.put(

"/admin/skip/"+id+"?reason="+reason

);


alert("Skipped");


}



return(

<div className="card">


<h1>
Admin Dashboard
</h1>



<input

placeholder="Entry ID"

onChange={(e)=>setId(e.target.value)}

/>



<h3>

Buttons

</h3>



<button onClick={serve}>

Serve Next

</button>



<br/><br/>



<input

placeholder="Reason for skip"

onChange={(e)=>setReason(e.target.value)}

/>



<button onClick={skip}>

Skip

</button>




</div>


)


}