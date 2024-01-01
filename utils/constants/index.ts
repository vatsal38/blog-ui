export const truncateDescription = (text: string, maxWords: number) => {
  const words = text?.split(" ");
  if (words?.length > maxWords) {
    return words?.slice(0, maxWords).join(" ") + "...READ MORE";
  }
  return text;
};
