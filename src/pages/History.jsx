import api from "../api";
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";


export default function History(){


const nav = useNavigate();


const [history,setHistory] = useState([]);





useEffect(()=>{

loadHistory();

},[]);







async function loadHistory(){


try{


let res = await api.get("/history");


setHistory(res.data);


}

catch(error){

console.log(error);

}


}








async function deleteHistory(id){


try{


await api.delete(
"/history/"+id
);


loadHistory();


}

catch(error){

console.log(error);

}


}








return(


<div className="history-page">



<button

className="back"

onClick={()=>nav("/dashboard")}

>

← Back

</button>







<h1>

Queue History

</h1>







{

history.length===0 ?


<h2>

No History Found

</h2>



:





history.map((item)=>(


<div

className="history-card"

key={item.id}

>





<h2>

{item.tokenNumber}

</h2>







<p>

Queue :

{item.queue?.queueName || "Unknown"}

</p>







<p>

Joined Time :

{item.joinedTime}

</p>







<p>

Position :

{item.position}

</p>







<p>

Status :

{item.status}

</p>






{

item.reason &&


<p>

Reason :

{item.reason}

</p>


}







<button

className="delete-btn"

onClick={()=>deleteHistory(item.id)}

>

Delete

</button>







</div>



))


}





</div>


)


}