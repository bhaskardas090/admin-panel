import styles from './home.module.css';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from './../../components/featuredInfo/FeaturedInfo';
import {data} from "../../dummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetBg from '../../components/widgetBg/WidgetBg';

export default function Home() {
  return (
    <div className={styles.home}>
      <FeaturedInfo/>
      <Chart title="Active Users" data={data} datakey="name"/>
      <div className={styles.homeWidgets}>
        <WidgetSm/>
        <WidgetBg/>
      </div>
    </div>
  )
}
