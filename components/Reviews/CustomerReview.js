
import CustomerReviewCard from "./CustomerReviewCard";
const CustomerReview = (props) => {
  return (
    <div className="">
      <h1 className="text-2xl p-2 bg-red-500">Reviews</h1>
      <div className="p-2">
        <ul>
          {props.reviews.map((reviews) => (
            <li key={reviews.id}>
              <CustomerReviewCard comment={reviews.comment}  rating={reviews.rating}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerReview;
