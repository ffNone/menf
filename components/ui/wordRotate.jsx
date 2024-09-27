import WordRotate from "@/components/magicui/word-rotate";

export async function WordRotateDemo() {
  return (
    <WordRotate
      className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      words={["Word", "Rotate"]}
    />
  );
}
