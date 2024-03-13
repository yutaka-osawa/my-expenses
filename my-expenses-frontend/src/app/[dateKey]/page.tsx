const Page = ({ params: { dateKey } }: { params: { dateKey: string } }) => {
  const categories = [
    "家賃",
    "水道代",
    "電気代",
    "ガス代",
    "食費",
    "外食費",
    "日用品",
    "ガソリン代",
    "日用品",
    "保健医療費",
    "携帯代",
  ];
  const accounts = ["現金", "銀行", "電子マネー", "クレジット"];
  return (
    <div className={"Page"}>
      <div className={"flex justify-center"}>
        <h1 className={"justify-center text-2xl"}>{dateKey}</h1>
      </div>
      <div className={"flex justify-center"}>
        <p className={"mr-2"}>金額</p>
        <input
          className={"border-2 border-black"}
          type="text"
          placeholder={"金額を入力"}
        />
      </div>
      <div className={"flex justify-center m-4"}>
        <p className={"mr-2"}>カテゴリ</p>
        <select>
          {categories.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
      </div>
      <div className={"flex justify-center m-4"}>
        <p className={"mr-2"}>アカウント</p>
        <select>
          {accounts.map((account) => {
            return <option key={account}>{account}</option>;
          })}
        </select>
      </div>
      <div className={"flex justify-center"}>
        <button className={"border-rounded border-black"}>保存</button>
      </div>
    </div>
  );
};

export default Page;
