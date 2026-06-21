import {Link} from "react-router-dom";
import "../style.css";


export default function Home(){


return(

<div className="home">


<div>

<h1>
QueueLess 🚀
</h1>


<p>

Smart Queue Management System.
Join remotely and track your waiting time.

</p>


<Link to="/register">

<button className="primary">

Get Started

</button>


</Link>


</div>


</div>


)


}