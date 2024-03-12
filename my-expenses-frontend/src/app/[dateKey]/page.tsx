const Page = ({ params: { dateKey } }: { params: { dateKey: string } }) => {
  return (
    <div className={"Page"}>
      <div className={"flex justify-center"}>
        <h1 className={"justify-center text-2xl"}>登録ページ</h1>
      </div>
      <div className={"flex justify-center"}>
        <input className={"border-2 border-black"} type="text" />
      </div>
    </div>
  );
};

export default Page;
