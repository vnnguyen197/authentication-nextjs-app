import * as React from 'react';
import style from './style.module.scss'

export interface IDetailProps {
}

export default function Detail (props: IDetailProps) {
  return (
    <div className={style.detail}>
           <h1 className={style.detail__h1}>Detail Authentication</h1>
    </div>
  );
}
