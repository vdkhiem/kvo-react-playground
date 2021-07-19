import "./Card.css";

// Re-usesage wrapper composition or children props
// It shares the look of component like rounded rectangle to reduce duplicated css code
function Card (props) {
    return (
        <div className="card">{props.children}</div>
    )
}

export default Card;