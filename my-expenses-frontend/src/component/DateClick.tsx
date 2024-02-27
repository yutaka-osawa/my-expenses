import { useNavigate } from "react-router-dom";

// type DateClickArg = {
//   date: Date; // クリックされた日付
//   dateStr: string; // クリックされた日付の文字列表現 (ISO 8601 形式)
//   allDay: boolean; // イベントが終日かどうか
//   jsEvent: MouseEvent; // ブラウザのマウスイベント
//   // view: View; // カレンダーの表示モード
// };
const DateClick = ({ dateStr }: { dateStr: string }) => {
  // const dateStr = info.dateStr;
  const navigate = useNavigate();

  navigate(`/date/${dateStr}`);

  return (
    <div>navigate(`/date/${dateStr}`);</div>
    // ページ遷移先
  );
};

export default DateClick;
