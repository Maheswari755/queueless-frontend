/*import api from "../api";
import {useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";


export default function Tracking(){


const nav = useNavigate();


let entry = JSON.parse(localStorage.getItem("entry"));



const [ahead,setAhead] = useState(0);

const [status,setStatus] = useState(
    entry?.status
);




async function loadQueue(){


    let res = await api.get(

        "/queue/"+entry.queue.id

    );



    let people = res.data;




    let current = people.find(

        p => p.id === entry.id

    );



    if(current){

        setStatus(current.status);

    }






    let count = people.filter(


        p => p.position < entry.position


    ).length;



    setAhead(count);



}





useEffect(()=>{


    loadQueue();



    const interval = setInterval(()=>{


        loadQueue();



    },5000);




    return ()=>clearInterval(interval);



},[]);








async function leave(){


    await api.put(

        "/queue/leave/"+entry.id

    );



    localStorage.removeItem("entry");



    nav("/dashboard");


}








return(


<div className="track-page">





<button

className="back"

onClick={()=>nav(-1)}

>

← Back

</button>







<h1>

Live Tracking

</h1>









<div className="track-card">





<h3>

Your Token

</h3>








<div className="token">

{entry.tokenNumber}

</div>








<p>

Status : {status}

</p>






</div>









<div className="info">





<div>


<h2>

{ahead}

</h2>


<p>

People Ahead

</p>


</div>








<div>


<h2>

{ahead * 3} min

</h2>


<p>

Estimated Wait

</p>


</div>








<div>


<h2>

{status}

</h2>


<p>

Status

</p>


</div>






</div>








<button

className="leave"

onClick={leave}

>

Leave Queue

</button>








</div>


)


}*/

import api from "../api";
import {useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";


export default function Tracking(){


const nav = useNavigate();


const [entry,setEntry] = useState(null);

const [ahead,setAhead] = useState(0);

const [status,setStatus] = useState("WAITING");





useEffect(()=>{


let saved =
JSON.parse(localStorage.getItem("entry"));



if(saved){

setEntry(saved);

setStatus(saved.status || "WAITING");


loadQueue(saved);


}



},[]);






async function loadQueue(data){


try{


let res =
await api.get(
"/queue/"+data.queue.id
);



let people =
res.data;




let current =
people.find(
p=>p.id === data.id
);



if(current){

setStatus(current.status);

}



let count =
people.filter(
p=>p.position < data.position
).length;



setAhead(count);



}
catch(error){

console.log(error);

}


}







async function leave(){


await api.put(
"/queue/leave/"+entry.id
);



localStorage.removeItem("entry");


nav("/dashboard");


}






if(!entry){


return(

<div className="track-page">

<h2>
No Active Token
</h2>


<button
className="back"
onClick={()=>nav("/dashboard")}
>

Go Dashboard

</button>


</div>

)

}






return(


<div className="track-page">


<button

className="back"

onClick={()=>nav(-1)}

>

← Back

</button>




<h1 className="track-title">

Live Tracking

</h1>





<div className="track-card">


<div className="token-section">


<h3>
Your Token
</h3>


<div className="token">

{entry.tokenNumber}

</div>


</div>





<div className="status-box">


<p>
Status
</p>


<h2>

{status}

</h2>


</div>



</div>






<div className="info">



<div>

<h2>

{ahead}

</h2>


<span>

People Ahead

</span>


</div>





<div>

<h2>

{ahead*3} min

</h2>


<span>

Estimated Wait

</span>


</div>





<div>

<h2>

{status}

</h2>


<span>

Current Status

</span>


</div>



</div>






<button

className="leave"

onClick={leave}

>

Leave Queue

</button>





</div>


)


}