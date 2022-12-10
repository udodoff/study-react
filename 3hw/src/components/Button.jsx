import { PropTypes } from "prop-types"
export function Button(props){
    return(
        <>
            <button {...props}></button>
        </>
    )
}
Button.propTypes = {
    type: PropTypes.string
}