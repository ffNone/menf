import NumberTicker from "@/components/magicui/number-ticker";

const NumberTickerDemo = (props) => {
  return (
    <>

    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white" style={props.style}>
      <NumberTicker value={props.value} />
        {props.title} 
    </p>
    </>
  );
};

export default NumberTickerDemo;
