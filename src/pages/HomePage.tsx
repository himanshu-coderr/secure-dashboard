import { useNavigate } from "react-router-dom";
import { goToSignInPage, goToSignUpPage } from "../constants/general";

const HomePage = () => {
    const navigate = useNavigate();

    return(
        <>
        <button className="bg-blue-500 text-white p-2 mt-2 mr-2" onClick={() => navigate('/signin')}>
            {goToSignInPage}
        </button>
        <button className="mx-auto bg-blue-500 text-white p-2 mt-2" type="submit" onClick={() => navigate('/signup')}>
            {goToSignUpPage}
        </button>
        </>
    )
}

export default HomePage;