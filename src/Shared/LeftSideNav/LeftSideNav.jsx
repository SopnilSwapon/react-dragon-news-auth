import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-bold">Categories
             </h2>

            <div className="mt-5">
            {
                categories.map(category => <NavLink 
                    to={`category${category.id}`}
                    key={category.id}
                    className='block border font-semibold text-xl p-2'
                    >{category.name}
                    </NavLink>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;