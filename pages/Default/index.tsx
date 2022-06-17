import * as React from 'react';
import style from './style.module.scss';

export interface IDefaultProps {
}

export default function Default (props: IDefaultProps) {
  return (
    <div className={style.default}>
        <h1 className={style.default__h1}>Not Authentication</h1>
    </div>
  );
}
