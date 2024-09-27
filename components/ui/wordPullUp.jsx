import WordPullUp from "@/components/magicui/word-pull-up";

export default function WordPullUpDemo(props) {
  return (
    <WordPullUp
      className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      words={props.words}
    />
  );
}
