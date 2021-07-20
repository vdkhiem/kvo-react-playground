import React, { useState } from 'react'; //useState is react hook 

function FirmItem(props) {
    const [title, setTitle] = useState(props.title); // set default value to state
    console.log('The firm item is evaluted');

    function addHandler() {
        setTitle('Khiem');
        console.log(title);
    }

    return (
        <div>
            This is firm item {title}
            <button onClick={addHandler}>Add</button>
        </div>
    )
}

export default FirmItem;