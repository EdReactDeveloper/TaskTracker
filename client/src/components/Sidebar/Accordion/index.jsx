import React, { Component } from "react";
// import { ICONS } from './svg/data';
// import Icon from './svg/icon';
import Icon from '../../misc/icon/Icon';
import { Item } from '../../misc/icon/Selection';
import Topic from '../../Board/Topics/Topic/index';
import style from './Accordion.module.scss'
import { Link } from 'react-router-dom';

class Accordion extends Component {

  render() {
    const { getTopic, boards, goToBoard } = this.props
    return (
      <ul className={style.menu}>
        {
          boards.map((item, i) => (
            <li key={item._id}>
              <Link to={`/boards/${item._id}`} className={style.item} onClick={() => goToBoard(i, item._id)}>
                <div className={style.btnAc}> {item.boardTitle} </div>
              </Link>

              <ul className={style.smenu}
              style={{maxHeight: item.active === 'yes' ? item.topics.length*3.5+'em': ''}}
              >
                {item.topics.map(item => (
                  <li className={style.smenuItem} key={item._id} onClick={() => getTopic(item._id)}>
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