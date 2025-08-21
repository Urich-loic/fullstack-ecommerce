import React, { useEffect, useState } from "react";
import Notification from "../components/Notification/Notification";
import axios from 'axios'
export default function NotificationPage() {
  const [notifications, setNotifications]=useState(null);

  const getNotification = () => {
    try {
      axios
        .get("/notification")
        .then(function (response) {
          // console.log(response);
          setTimeout(() => {
            setNotifications(response.data);
          }, 4000);

          setTimeout(() => {
            setIsLoading("d-none");
            setMainComponent("");
          }, 4000);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  const [mainComponent, setMainComponent] = useState("d-none");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => getNotification(), []);

  return (
    <div className="content">
      <Notification notifications={notifications} mainComponent={mainComponent} isLoading={isLoading}/>
    </div>
  );
}
