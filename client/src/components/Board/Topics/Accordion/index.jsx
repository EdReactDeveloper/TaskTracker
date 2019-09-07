import React, { Component } from "react";
import { ICONS } from './svg/data';
// import Icon from './svg/icon';
import Topic from '../Topic/index';
import style from './Accordion.module.scss'
class Accordion extends Component {
  state = {
    data: [
      {
        title: "Profile",
        sub: ["Posts", "Picture"],
        icon: ICONS.user,
        active: 'no'
      },
      {
        title: "Message",
        sub: ["New", "Sent", "Spam"],
        icon: ICONS.chat,
        active: 'no'
      },
      {
        title: "Settings",
        sub: ["Password", "Language"],
        icon: ICONS.account,
        active: 'no'
      },
      {
        title: "Logout",
        sub: [],
        icon: ICONS.logout,
        active: 'no'
      }
    ]
  }


  clickHandler = (i) => {

    const data = [...this.state.data]

    for (let key in data) {
      if (key == i) {
        data[key].active = 'yes'
      } else {
        data[key].active = 'no'
      }
    }

    this.setState({
      data
    })
  }
  render() {

    const {data, submitHandler, addNewListData, type, removeTopic} = this.props

    return (
      <div className={style.middle}>
        <div className="menu">
          {
            this.state.data.map((item, i) => (
              <li className={style.item}

                key={i} onClick={() => this.clickHandler(i)}>
                <a href="#" className={style.btnAc}>
                  {/* <Icon d={item.icon} className="iconAc"/> */}
                  {item.title}
                </a>

                <div className={`${style.smenu} ${item.active === 'yes' ? style.activeAc : ''} `}>
                  {item.sub.map((title, i) => (
                    <div className={style.smenuItem}>
                      <a href="#" key={i}>
                        {title}
                      </a>
                    </div>

                  ))}
                </div>
              </li>
            ))}
        </div>
      </div>
    );
  }
}

export default Accordion;
