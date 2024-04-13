import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import qpic1 from '../../assets/qZone1.png'
import qpic2 from '../../assets/qZone2.png'
import qpic3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <>
        <div>
            <h2 className="text-3xl">Login with</h2>
            <button className="btn btn-outline mt-3 w-full p-3">

                <FcGoogle></FcGoogle>
                Google Login
            </button>
            <button className="btn btn-outline mt-3 w-full mb-8">

                <BsGithub></BsGithub>
                Github Login
            </button>
        </div>
        <div>
            <h2 className="text-3xl">Find Us On</h2>
            <button className="btn btn-outline mt-3 w-full p-3">

                <FaFacebook></FaFacebook>
                Facebook
            </button>
            <button className="btn btn-outline border-t-neutral-content w-full">

               <FaInstagram></FaInstagram>
                Instagram
            </button>
            <button className="btn btn-outline border-t-neutral-content w-full">

               <FaTwitterSquare></FaTwitterSquare>
                Twitter
            </button>
        </div>
        <div>
            <h2 className="text-3xl mt-8">Q Zone</h2>
            <img src={qpic1} alt="" />
            <img src={qpic2} alt="" />
            <img src={qpic3} alt="" />
            
        </div>
        </>
    );
};

export default RightSideNav;