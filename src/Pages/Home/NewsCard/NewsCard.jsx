import { Link } from "react-router-dom";

const NewsCard = ({aNews}) => {
    const {title, image_url, details, _id}  = aNews;
    return (
        <div>
            <div className="card mt-12 bg-base-100 shadow-xl">
  <figure><img src={
image_url
} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   {
     details.length > 200 ? <p>{details.slice(0, 200)} <Link className="text-green-700  font-bold" to={`/details${_id}`}>Read more...</Link></p> : <p>{details}</p>
   }
  </div>
</div>
        </div>
    );
};

export default NewsCard;