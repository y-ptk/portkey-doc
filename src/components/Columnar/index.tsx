import React from "react";
import styles from './index.module.css';

export interface IColumnarProps {
  data: {
    title?: string;
    icon: string;
    desc?: string[];
  }[];
};

const Columnar = ({ data }: IColumnarProps) => {

  const headers = data.map(item => item.title || '');

  return <>
    <div className={styles['column-show-header']}>
      {headers.map(item => <h3 key={item}>{item}</h3>)}
    </div>
    <div className={styles['column-show-container']}>
      {data?.map(item => <div className={styles['column-item']} key={item.title}>
        <img src={item.icon} alt={item.title}/>
        {item.desc && <ol>
          {item.desc?.map((i, index) => <li key={index}>{i}</li>)}
        </ol>}
      </div>)
      }
    </div>
  </>
};

export default Columnar;
