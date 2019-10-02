import React from 'react';
import style from './Loader.module.scss';

const Loader = (props) => <div className={`${props.className} ${style.loader}`}>loading ...</div>;

export default Loader;
