import Logo from "../components/Logo";
import mainImage from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from "react-router-dom";

function Landing() {
    return (
        <Wrapper>
                <nav>
                <Logo/>
                </nav>
                <div className="container page">
                    <div className="info">
                        <h1>Jobs <span>Tracking</span> Application</h1>
                        <p>Keep track of the number of jobs and applications easily. A great way to get new jobs
                            and applications from great candidates</p>
                        <Link to="/register" className="btn btn-hero">Login/Register</Link>
                    </div>
                    <img src={mainImage} alt="landing" className="img main-img"/>
                </div>
        </Wrapper>
    )
}


export default Landing;