import api from "../api";
import {useNavigate} from "react-router-dom";


export default function QueueCard({data}){


const nav=useNavigate();



async function join(){


let user=

JSON.parse(localStorage.getItem("user"));



let res=

await api.post("/queue/join",{

user:user,

queue:{
id:data.id
}

});



localStorage.setItem(

"entry",

JSON.stringify(res.data)

);



nav("/tracking");


}



return(


<div className="service">


<h1>

{data.icon}

</h1>


<h2>

{data.name}

</h2>


<p>

{data.time}

</p>


<h3>

{data.wait} Waiting

</h3>


<button onClick={join}>

Join Queue

</button>


</div>


)


}