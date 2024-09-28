
export default function Divider(props) {
    return (        
        <>
        <span className="absolute px-3 font-medium   -translate-x-1/2   left-1/2   dark:bg-gray-900" style={props.style}>{props.text}</span>
        </>
    )
}