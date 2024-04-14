import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const Details = () => {
    const id = useParams();
    
    console.log(id);
    return (
        <div>
            <h2 className="text-3xl text-center font-bold text-red-600">Waittttttttttttttt !!!!! yaarr</h2>
            <div>
                 <Navbar></Navbar>
                    </div>
            <div>
                <div className="grid grid-cols-2">
                   
                    <div>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <div>
                        <RightSideNav></RightSideNav>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;