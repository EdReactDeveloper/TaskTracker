import React, { Component } from "react";
import style from './Accordion.module.scss'
import { Link } from 'react-router-dom';
import board from "../../../store/reducers/board";

class Accordion extends Component {

  render() {
    const { getTopic, boards, getBoard, topic, board } = this.props
    return (
      <ul className={style.menu}>
        {
          boards.map(item => (
            <li key={item._id}>
              <Link to={`/boards/${item._id}`} className={style.item} onClick={() => getBoard(item._id)}>
                <div className={`${style.btnAc} ${(board && item._id === board._id) ? style.board_background : ''}`}> {item.title} </div>
              </Link>

              <ul className={style.smenu}
                style={{ maxHeight: (board && item._id === board._id) ? item.topics.length * 3.5 + 'em' : '' }}
              >
                {item.topics.map(item => (
                  <li
                    className={`${style.smenuItem} ${(topic && item._id === topic._id) ? style.topic_background : ''}`}
                    key={item._id}
                    onClick={() => getTopic(item._id)}>
                    <div className={style.smenuItemIitle}>
                      {item.title}
                    </div>
                  </li>

                ))}
              </ul>
            </li>
          ))}
      </ul>
    );
  }
}

export default Accordion;
