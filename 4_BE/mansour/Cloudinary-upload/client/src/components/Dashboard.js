import React , {useContext, useEffect} from 'react';
import { Container } from 'reactstrap';
import AuthContext from "../context/auth/AuthContext";
import { Navigate } from 'react-router-dom';


export default function Dashboard() {
  const { state,dashboard } = useContext(AuthContext);
  useEffect(()=>{
    dashboard();
   },[])
  if (!state.isAuthenticated) return <Navigate to='/login' />;


  return (
      <Container fluid className="text-center p-5">
        <h3>Dashboard Page!</h3>
        <h4> welcome {state.user && state.user.name  }!</h4>
        <div>
        {state.images && state.images.map(img=>{
        return  <img src={img.image} />
        })}
        </div>
       
      </Container>  
  )
}
