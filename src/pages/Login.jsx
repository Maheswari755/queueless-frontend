import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";


export default function Login(){


const nav = useNavigate();


const [email,setEmail] = useState("");





async function login(){


try{


let res = await api.post("/user/login",{

email:email

});



localStorage.setItem(

"user",

JSON.stringify(res.data)

);



localStorage.setItem(

"userId",

res.data.id

);



nav("/dashboard");


}

catch(error){


alert("Invalid Email");


}



}






return(


<div className="page-bg">



<div className="auth-box">





<div className="auth-heading">

Welcome Back

</div>





<div className="auth-sub">

Login to continue QueueLess

</div>






<input

type="email"

placeholder="Enter Email"

onChange={(e)=>

setEmail(e.target.value)

}

/>







<button

className="main-btn"

onClick={login}

>

Login

</button>







<button

className="back"

onClick={()=>nav("/")}

>

← Back

</button>







</div>



</div>


)


}