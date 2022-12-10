import { PropTypes } from "prop-types"
export function MessageList({messages}){


    return(
        <>
        <h1>Message List</h1>
        <ul>
            {messages.map((item, index) => (
                <li key={index}>{item.text}</li>
            ))}
        </ul>
        </>
    )
}
MessageList.propTypes = {
    messages: PropTypes.array
}