
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div  className="BigHero" >
      <div className="text-light bighero_text">
      <h1>Bienvenido a Happy Cake </h1>
      <p>El lugar de los pasteles felices</p>
      <Button variant="outline-light"><Link to= "/contact" className="text-light text-decoration-none"> 
Contactanos
</Link></Button>{' '}
      </div>

     <div className="BigHero_img">
     <img src="https://firebasestorage.googleapis.com/v0/b/weather-7f851.appspot.com/o/Group%202%20(1).png?alt=media&token=fd53749b-3e5a-4c3c-92eb-3c59ce085ff3&_gl=1*1wzwpyy*_ga*MTExNzIyMzk2OC4xNjk4ODgyMDUx*_ga_CW55HF8NVT*MTY5ODkzNjU5NC4zLjEuMTY5ODkzNjU5Ni41OC4wLjA." alt="torta osito" />
     </div>
     
      </div>
 
    </div>
  )
}

export default HomePage
