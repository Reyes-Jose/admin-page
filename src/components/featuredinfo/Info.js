import "./InfoStyle.css";
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@mui/icons-material";
export default function Info() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1000</span>
            <span className="featuredMoneyRate">-5 <ArrowDownwardOutlined className="arrowIcon negative"/></span>
        </div>
        <span className="featuredSubTitle">Last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2000</span>
            <span className="featuredMoneyRate">-7.4 <ArrowDownwardOutlined className="arrowIcon negative"/></span>
        </div>
        <span className="featuredSubTitle">Last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2000</span>
            <span className="featuredMoneyRate">+4 <ArrowUpwardOutlined className="arrowIcon positive"/></span>
        </div>
        <span className="featuredSubTitle">Last month</span>
      </div>
    </div>
  );
}
