import logo from '../assets/images/logo.svg';
import mainImage from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
function Landing() {
    return (
        <Wrapper>
                <nav>
                    <img src={logo} alt="logo" className="logo"/>
                </nav>
                <div className="container page">
                    <div className="info">
                        <h1>Jobs <span>Tracking</span> Application</h1>
                        <p>Keep track of the number of jobs and applications easily. A great way to get new jobs
                            and applications from great candidates</p>
                        <button className="btn btn-hero">Login/Register</button>
                    </div>
                    <img src={mainImage} alt="landing" className="img main-img"/>
                </div>
        </Wrapper>
    )
}


export default Landing;