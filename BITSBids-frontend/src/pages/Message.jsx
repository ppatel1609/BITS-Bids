const Message = (props) =>
{
    
    return(
        <div>
            <b>{props.sender}</b>
            <br/>
            {props.message}
            <hr/>
            
        </div>
    )
}

export default Message;