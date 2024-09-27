import BoxReveal from "@/components/magicui/box-reveal";

export default async function BoxRevealDemo(props) {
  return (
    <div className=" overflow-hidden ">
      <BoxReveal boxColor={"#2185d0"} duration={0.5} className="w-full">
 
          {props.content}
 
      </BoxReveal>
    </div>
  );
}
