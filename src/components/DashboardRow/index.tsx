import moment from "moment";
import css from './css.module.scss'
import parcelStatus from '../../utils/enums/parcelStatus'

const DashboardRow = ({ item }: any) => {
  return (
    <tr className={css.row}>
      <td>{item.id}</td>
      <td>{item.description}</td>
      <td>{item.weight} KG</td>
      <td>{parcelStatus[item.status]}</td>
      <td>{item.pickupAddress}</td>
      <td>{moment(item.pickupTime).format('lll')}</td>
      <td>{item.deliveryAddress}</td>
      <td>{moment(item.deliveryTime).format('lll')}</td>
      <td>{item.sender}</td>
      <td>{item.biker}</td>
      </tr>
  );
};

export default DashboardRow;
