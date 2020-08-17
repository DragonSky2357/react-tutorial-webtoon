import React from "react";
import { Link } from "react-router-dom";

const WebtoonList = (props) => {
  return (
    <ul className="list_webtoon">
      {props.list.map((webtoon, index) => (
        <li key={index}>
          <Link to={`/webtoon/${webtoon.id}`} className="link_webtoon">
            <img
              src={webtoon.img}
              className="img_webtoon"
              alt={webtoon.title}
            />
            <div className="info_webtoon">
              <strong className="tit_webtoon">{webtoon.title}</strong>
              <p>{webtoon.author}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default WebtoonList;
