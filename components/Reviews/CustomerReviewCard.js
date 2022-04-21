import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";

const CustomerReviewCard = (props) => {
  let ratingarr = [];
  for(let i=0;i<props.rating;i++){
   ratingarr.push(<FaStar className="rounded-full text-yellow-500" />);
  }
  return (
    <div className="border rounded-xl mt-3">
      <div className="flex p-2 ">
        <h1 className="mr-2">{props.comment}</h1>
        <div className="flex items-center mb-1">
          <FaStar className="rounded-full text-yellow-500" />
          <FaStar className="rounded-full text-yellow-500" />
          <FaStar className="rounded-full text-yellow-500" />
          <FaStar className="rounded-full text-yellow-500" />
          <FaRegStar className="rounded-full  text-yellow-500" />
        </div>
      </div>
      {/* <div className="flex p-2">
        <p>
          24 hr review...For the price it's an awesome bargain... Per my
          experience it's approx 105 db 32ohms which is awesome... At times I
          felt like as if it was 107 db.. I was not able to hear a few chilling
          and extra music instruments in boat but I was shocked to realise that
          these beautiful tones were there in the songs with this ant audio
          usage...
        </p>
      </div> */}
    </div>
  );
};

export default CustomerReviewCard;
