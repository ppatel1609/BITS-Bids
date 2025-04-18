import axios from "axios";
import ip from "../ip";
import React, { useState, useEffect } from 'react';

import Message from "./Message"
const Chat = (props) => {
    const [old,setOld] = useState([]);
    const [messages, setMessages] = useState({
        message : ""
    });

    useEffect( () =>
    {

    },[]);
    const retreiveOld = async () => {
        const res = await axios.get("`http://"+ ip + ":8080/api/chat/messages/all?productId="+props.productId+"&sellerId="+props.sellerId+"&userId="+props.userId)
        console.log(res.data)
        return res.data;
    }
    const getAllOld = async ()=>
    {
        const allOld = await retreiveOld();
        if(allOld)
        {
            setOld(allOld);
        }
    }
    // getAllOld();
    const handleInput = (e) => {
        setMessages({ message : e.target.value});
    };
    const sendMessage = () =>
    {
        const formData = new FormData();
        formData.append("message" , messages.message)
        formData.append("productId",props.productId);
        formData.append("userId",props.userId);
        formData.append("sellerId",props.sellerId);
        formData.append("sender",props.sender);

        axios
            .post("http://"+ ip + ":8080/api/chat/send", formData)
            .then((resp) => {
                let result = resp.data.data;

            })
            .catch((error) => {
                console.log("Error", error);
                alert("Error Sending Message");
            });
        
    }
    const getOldMessages = async (productId,sellerId,userId) =>
    {   let url = `http://`+ ip + `:8080/api/chat/messages/all?productId=`+productId + "&sellerId="+sellerId+"&userId=" + userId
        console.log(url)
        const response = await axios.get(url)
            if(response.data)
            {
                setOld(response.data);
            }
            return response.data;
    }

    return (
        <div
        class="list-group form-card border-color"
        style={{
          height: "34rem",
        }}
      >
        <div class="list-group-item list-group-item-action bg-color custom-bg-text">
          <b>Chat</b>
        </div>
        

        <div
          style={{
            overflowY: "auto",
          }}
        >

          
        </div>
            <form>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={handleInput}
                    value={messages.message}
                />
                    <button onClick={sendMessage}>
                        Send

                    </button>

            </form>
      </div>
    );
};



export default Chat;