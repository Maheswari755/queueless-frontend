import QueueCard from "../components/QueueCard";
import {useNavigate} from "react-router-dom";


export default function Dashboard(){


const nav = useNavigate();



let data=[


["🍴","College Canteen","12:30 PM",15],

["📚","Library","9AM-5PM",5],

["👨‍🏫","Faculty Appointment","10AM-1PM",8],

["🎟","Events","9AM-4PM",20]


];



return(


<div className="layout">





<div className="sidebar">





<div className="logo">

QueueLess

</div>








<button

className="nav-btn"

onClick={()=>nav("/dashboard")}

>

🏠 Dashboard

</button>







<button

className="nav-btn"

onClick={()=>nav("/tracking")}

>

🎟 My Tokens

</button>







<button

className="nav-btn"

onClick={()=>nav("/history")}

>

📜 History

</button>







<button

className="nav-btn"

>

👤 Profile

</button>







<button

className="nav-btn"

onClick={()=>nav("/")}

>

🚪 Logout

</button>






</div>









<div className="content">





<h1 className="title">

Available Services

</h1>









<div className="grid">



{

data.map((x,i)=>(


<QueueCard


key={i}



data={{


id:i+1,

icon:x[0],

name:x[1],

time:x[2],

wait:x[3]


}}



/>


))


}





</div>







</div>






</div>


)


}