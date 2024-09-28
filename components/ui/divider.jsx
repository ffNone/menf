
export default function Divider(props) {
    return (        
        <>
        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900" style={props.style}>{props.text}</span>
        </>
    )
}