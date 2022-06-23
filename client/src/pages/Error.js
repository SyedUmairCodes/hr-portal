import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
    return(
        <Wrapper className="full-page">
            <div>
                <img src={img} alt="not found"/>
                <h3>This page does not exist.</h3>
                <p>Please re-check the URL and try again. </p>
                <Link to="/">Go to Home Page</Link>
            </div>
        </Wrapper>
    )
}

export default Error;