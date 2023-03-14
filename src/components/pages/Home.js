import Chart from "../Chart/Chart";
import Info from "../featuredinfo/Info";
import "./home.css";


export default function home() {
  return <div className="home">
    <Info/>
    <Chart/>
    </div>;
}
