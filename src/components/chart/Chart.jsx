import styles from'./chart.module.css';
import { LineChart, ResponsiveContainer, XAxis, Line, Tooltip, CartesianGrid } from 'recharts';

export default function Chart({title, data, datakey}) {
  
  return (
    <div className={styles.chart}>
      <h1 className={styles.title}>{title}</h1>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey={datakey} stroke='#5550bd'/>
          <Line type="monotone" dataKey="activeuser" stroke="#5550bd"/>
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
          <Tooltip/>
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}
