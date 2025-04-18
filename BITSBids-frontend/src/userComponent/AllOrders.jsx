import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import ip from "../ip";
const AllOrders = () => {
  const [allOrderData, setAllOrderData] = useState([]);

  const [todaysTotalOrderAmount, setTodaysTotalOrderAmount] = useState("");

  useEffect(() => {
    const getAllOrder = async () => {
      const allOrder = await retrieveAllOrder();
      if (allOrder) {
        setAllOrderData(allOrder);
      }
    };

    const getTodaysTotalOrderAmount = async () => {
      const orderAmount = await retrieveTodaysTotalOrderAmount();
      if(orderAmount ==0)
      {
        setTodaysTotalOrderAmount(0);
      }
      if (orderAmount) {
        setTodaysTotalOrderAmount(orderAmount);
      }
    };

    getAllOrder();

    getTodaysTotalOrderAmount();
  }, []);

  const retrieveAllOrder = async () => {
    const response = await axios.get(
      "http://"+ ip + ":8080/api/user/admin/allorder"
    );
    console.log(response.data);
    return response.data;
  };

  const retrieveTodaysTotalOrderAmount = async () => {
    const response = await axios.get(
      "http://"+ ip + ":8080/api/user/order/today/totalAmount"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color "
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header custom-bg-text text-center bg-color">
          <h2>All Orders</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="text-left text-color">
            <h2>Todays Total Order Amount : {todaysTotalOrderAmount} BITSCoin</h2>
          </div>

          <div className="table-responsive">
            <table className="table table-hover text-color text-center">
              <thead className="table-bordered border-color bg-color custom-bg-text">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">ID Number</th>
                  <th scope="col">Room Number</th>
                  <th scope="col">ERP ID</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Order Date</th>
                  {/*<th scope="col">Delivery Date</th>*/}
                  {/*<th scope="col">Delivery Status</th>*/}
                  {/*<th scope="col">Order Status</th>*/}
                  {/*<th scope="col">Delivery Person</th>*/}
                  {/*<th scope="col">Delivery Mobile No</th>*/}
                </tr>
              </thead>
              <tbody>
                {allOrderData.map((orderData) => {
                  return (
                    <tr>
                      <td>
                        <b>{orderData.orderId}</b>
                      </td>
                      <td>
                        <img
                          src={
                            "http://"+ ip + ":8080/api/product/" +
                            orderData.productImage
                          }
                          class="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{orderData.productName}</b>
                      </td>
                      <td>
                        <b>{orderData.productDescription}</b>
                      </td>
                      <td>
                        <b>{orderData.quantity}</b>
                      </td>
                      <td>
                        <b>{orderData.totalPrice}</b>
                      </td>
                      <td>
                        <b>{orderData.userName}</b>
                      </td>
                      <td>
                        <b>{orderData.address.street}</b>
                      </td>

                      <td>
                        <b>{orderData.address.city}</b>
                      </td>
                      <td>
                        <b>{orderData.address.pincode}</b>
                      </td>
                      <td>
                        <b>{orderData.userPhone}</b>
                      </td>
                      <td>
                        <b>{orderData.orderDate}</b>
                      </td>
                      {/*<td>*/}
                      {/*  <b>{orderData.deliveryDate}</b>*/}
                      {/*</td>*/}
                      {/*<td>*/}
                      {/*  <b>{orderData.deliveryStatus}</b>*/}
                      {/*</td>*/}
                      {/*<td>*/}
                      {/*  <b>{orderData.status}</b>*/}
                      {/*</td>*/}
                      {/*<td>*/}
                      {/*  <b>{orderData.deliveryPersonName}</b>*/}
                      {/*</td>*/}
                      {/*<td>*/}
                      {/*  <b>{orderData.deliveryPersonContact}</b>*/}
                      {/*</td>*/}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
