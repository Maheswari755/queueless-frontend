import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";


export default function Register(){


const nav = useNavigate();




const [user,setUser] = useState({

name:"",

email:"",

phone:""

});







async function register(){


try{


await api.post("/user/register",user);



alert("Account Created Successfully");



nav("/login");


}

catch(error){


alert("Registration Failed");


}


}







return(


<div className="page-bg">



<div className="auth-box">






<div className="auth-heading">

Create Account

</div>






<div className="auth-sub">

Join QueueLess today

</div>








<input


type="text"

placeholder="Full Name"


onChange={(e)=>

setUser({

...user,

name:e.target.value

})

}



/>







<input


type="email"

placeholder="Email"


onChange={(e)=>

setUser({

...user,

email:e.target.value

})

}



/>







<input


type="text"

placeholder="Phone Number"


onChange={(e)=>

setUser({

...user,

phone:e.target.value

})

}



/>










<button

className="main-btn"

onClick={register}

>

Create Account

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