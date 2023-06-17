export default function Topic (props) {
    return (
        <div className="topic-wrapper">
            {props.children}
            <hr />
        </div>
    )
}