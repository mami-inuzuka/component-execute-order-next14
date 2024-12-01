export default async function Home() {
  console.log("page");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("page after 1 sec");

  return <>HOME</>;
}
