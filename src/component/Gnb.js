import React from "react";
import { Link } from "react-router-dom";

const days = [
  { eng: "mon", kor: "월요일" },
  { eng: "tue", kor: "화요일" },
  { eng: "wed", kor: "수요일" },
  { eng: "thu", kor: "목요일" },
  { eng: "fri", kor: "금요일" },
  { eng: "sat", kor: "토요일" },
  { eng: "sun", kor: "일요일" },
];

const Gnb = (props) => (
  <ul className="gnb">
    {days.map((day, index) => (
      <li key={index}>
        <Link
          to={"/?day=" + day.eng}
          className={props.day === day.eng ? "tab_day on" : "tab_day"}
        >
          {day.kor}
        </Link>
      </li>
    ))}
  </ul>
);
export default Gnb;
