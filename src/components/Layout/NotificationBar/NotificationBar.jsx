import './notificationBar.css';

import USERIMG from '../../../assets/userIcon.svg'

export default function NotificationBar() {


    return (
       <aside className='notification_bar'>
            <div>
                <h5>Notifcations</h5>
            </div>
            <div>
                <h5>Activites</h5>
            </div>
            <div className='notification_contact_container'>
                <h5 className='notification_contact_heading'>Contact</h5>
                <ul>
                    <li>
                        <img src={"https://drive.usercontent.google.com/download?id=1_ZlgFjPrDq1hMPhHpMAkViP2qBVsDa10&export=view&authuser=0"}/>
                        <span>Natali Craig</span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}