import "./SideBarStyle.css";
import { LineStyle, Timeline, TrendingUp, Group, Storefront, AttachMoney, AssessmentOutlined, MailOutline, ForumOutlined, MessageOutlined, ManageAccountsOutlined, ReportOutlined,  } from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarContainer">
        <h3 className="sideTitle">Dashboard</h3>
        <ul className="sideList">
          <li className="listItem active">
            <LineStyle className="iconStyle" />
            Home
          </li>
          <li className="listItem">
            <Timeline className="iconStyle" />
            Analytics
          </li>
          <li className="listItem">
            <TrendingUp className="iconStyle" />
            Sales
          </li>
        </ul>
        <h3 className="sideTitle">Quick Menu</h3>
        <ul className="sideList">
          <li className="listItem">
            <Group className="iconStyle" />
            Users
          </li>
          <li className="listItem">
            <Storefront className="iconStyle" />
            Products
          </li>
          <li className="listItem">
            <AttachMoney className="iconStyle" />
            Transactions
          </li>
          <li className="listItem">
            <AssessmentOutlined className="iconStyle" />
            Reports
          </li>
        </ul>
        <h3 className="sideTitle">Notifications</h3>
        <ul className="sideList">
          <li className="listItem">
            <MailOutline className="iconStyle" />
            Mail
          </li>
          <li className="listItem">
            <ForumOutlined className="iconStyle" />
            Feedback  
          </li>
          <li className="listItem">
            <MessageOutlined className="iconStyle" />
            Messages
          </li>
        </ul>
        <h3 className="sideTitle">Staff</h3>
        <ul className="sideList">
          <li className="listItem">
            <ManageAccountsOutlined className="iconStyle" />
            Manage
          </li>
          <li className="listItem">
            <Timeline className="iconStyle" />
            Analytics
          </li>
          <li className="listItem">
            <ReportOutlined className="iconStyle" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  );
}
