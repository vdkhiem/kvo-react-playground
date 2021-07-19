function FirmItem(props) {
    let title = props.title;

    function addHandler() {
        title = 'Updated';
        console.log('Add new firm item')
    }
    
    return (
        <div>
            This is firm item {title}
            <button onClick={addHandler}>Add</button>
        </div>
    )
}

export default FirmItem;