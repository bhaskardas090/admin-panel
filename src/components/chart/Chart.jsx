import styles from'./chart.module.css';
import { LineChart, ResponsiveContainer, XAxis, Line, Tooltip, CartesianGrid } from 'recharts';

export default function Chart({title, data, xaxis, datakey, grid}) {
  
  return (
    <div className={styles.chart}>
      <h2 className={styles.title}>{title}</h2>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey={xaxis} stroke='#5550bd'/>
          <Line type="monotone" dataKey={datakey} stroke="#5550bd"/>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          <Tooltip/>
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}
