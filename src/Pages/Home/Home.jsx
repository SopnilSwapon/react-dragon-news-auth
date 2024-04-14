import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import logo from '../../assets/logo.png';
import moment from 'moment';
import BreakingNews from "./BreakingNews";
import { useLoaderData} from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            
           <div className="flex justify-center my-4">
           <img src={logo} alt="" />
           </div>
           <p className='flex justify-center'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
           <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                {
                    news.map(aNews => <NewsCard 
                 key={news._id}
                 aNews={aNews}   
                    
                ></NewsCard>)
                }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;