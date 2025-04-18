import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import star from "../images/star.png";
import ip from "../ip";
const GetProductReviews = (hotel) => {
  const [reviews, setReviews] = useState([]);

  const { productId } = useParams();

  const retrieveAllReviews = async () => {
    const response = await axios.get(
      "http://"+ ip + ":8080/api/product/review/fetch?productId=" + productId
    );
    return response.data;
  };

  useEffect(() => {
    const getAllReviews = async () => {
      const allReviews = await retrieveAllReviews();
      if (allReviews) {
        setReviews(allReviews);
      }
    };

    getAllReviews();
  }, []);

  return (
    <div
      class="list-group form-card border-color"
      style={{
        height: "34rem",
      }}
    >
      <div class="list-group-item list-group-item-action bg-color custom-bg-text">
        <b>Product Reviews</b>
      </div>
      <div
        style={{
          overflowY: "auto",
        }}
      >
        {reviews.map((review) => {
          return (
            <div class="list-group-item list-group-item-action text-color custom-bg">
              <b className="text-color1">{review.user + " "}</b>
              <b className="text-color">{review.star + " /5 "}</b>
              <img
                src={star}
                width="20"
                height="20"
                className="d-inline-block align-top"
                alt=""
              />
              <br />
              <p>{review.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetProductReviews;
