export default function Circle(props) {
    return (
        <div className='circle' style={props.color}
              onClick={props.removeClick}>
        {props.number}
        </div>
    )
}

