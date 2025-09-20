import { NOTICONTACTDATA } from './NOTIDATA';
import './notificationBar.css';
import NotificationList from './NotificationList/NotificationList';


const sampleActivities = [
  {
    avatar: 'Female08.png',
    text: 'You have a bug that needs...',
    time: 'Just now',
  },
  {
    avatar: 'Female15.jpg',
    text: 'Released a new version',
    time: '59 minutes ago',
  },
  {
    avatar: 'Male06.png',
    text: 'Submitted a bug',
    time: '12 hours ago',
  },
  {
    avatar: 'Male07.png',
    text: 'Modified A data in Page X',
    time: 'Today, 11:59 AM',
  },
  {
    avatar: 'Male08.png',
    text: 'Deleted a page in Project X',
    time: 'Feb 2, 2023',
  },
];

const notifications = [
    { icon: "🐞", message: "You have a bug that needs...", time: "Just now" },
    { icon: "👤", message: "New user registered", time: "59 minutes ago" },
    { icon: "🐞", message: "You have a bug that needs...", time: "12 hours ago" },
    { icon: "📡", message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];



export default function NotificationBar() {

    return (
       <aside className='notification_bar'>
            <div>
                <h5 className='notification_notitfication_heading'>Notifcations</h5>
                <NotificationList notifications={notifications} />
            </div>
            <div className='notification_activity_container'>
                <h5 className='notification_activity_heading'>Activites</h5>
                 <ActivityTimeline activities={sampleActivities} />
            </div>
            <div className='notification_contact_container'>
                <h5 className='notification_contact_heading'>Contact</h5>
                <ul className='notification_contact_list'>
                   {NOTICONTACTDATA.map(item=>{
                    return <li key={item.id} className='notification_contact_item'>
                        <div style={{width:'24px', height:'24px',marginRight:'8px',borderRadius:'50%', overflow:'hidden'}}>
                        <img src={item.img}/>
                        </div>
                        <span className='contact_name'>{item.name}</span>
                    </li>
                   })} 
                </ul>
            </div>
        </aside>
    )
}


const ActivityTimeline = ({ activities }) => {
  return (
    <div className="activity_timeline">
      <ul className="activity_timeline_list">
        {activities.map((activity, index) => (
          <li key={index} className="activity_timeline_item">
            <div className="activity_timeline_avatar_wrapper">
              <img src={activity.avatar} alt="avatar" className="activity_timeline_avatar" />
              {index !== activities.length - 1 && (
                <div className="activity_timeline_line"></div>
              )}
            </div>
            <div className="activity_timeline_content">
              <p className="activity_timeline_text">{activity.text}</p>
              <span className="activity_timeline_time">{activity.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
