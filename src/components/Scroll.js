import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid #6e55e0', height: '75vh'}}>
            {props.children}
        </div>
    );
}


export default Scroll;