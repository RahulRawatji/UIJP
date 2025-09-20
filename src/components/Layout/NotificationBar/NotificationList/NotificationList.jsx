import "./notificationList.css";

const NotificationList = ({ notifications }) => {
  return (
      <ul className="notification_item_list">
        {notifications.map((note, index) => (
          <li className="notification_item" key={index}>
            <div className="notification_item_icon">{note.icon}</div>
            <div className="notification_item_content">
              <p className="notification_item_message">{note.message}</p>
              <span className="notification_item_time">{note.time}</span>
            </div>
          </li>
        ))}
      </ul>
  );
};

export default NotificationList;