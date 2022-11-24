import Calendar from "../components/Calendar";
import AddEventButton from "../components/FreqCompo/AddEventButton";
import HeaderAlarm from "../components/HeaderAlarm";

export default () => {
  return (
    <div>
      <HeaderAlarm />
      <Calendar />
      {/* <AddEventButton /> */}
    </div>
  );
};
