import {Link} from "react-router-dom"

function Navigation()
{
	return(
			<nav style={{backgroundColor:"blue",padding:"10px 20px",marginBottom:"10px"}}>
				<Link to="/" style={{textDecoration:"none",color:"white",paddingRight:"10px"}}>Student Registration</Link>
				<Link to="/studentlist" style={{textDecoration:"none",color:"white",paddingRight:"10px"}}> Student List </Link>
			</nav>
		)
}
export default Navigation