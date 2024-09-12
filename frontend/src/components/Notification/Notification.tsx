import React, { useState } from "react";
import "./Notification.css";

interface Notification {
  id: number;
  message: string;
}

export const NotificationContainer: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  return (
    <div
      className="fixed top-5 inset-x-0 z-50 flex flex-col items-center space-y-2"
    >
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="notification bg-gray-800 text-white px-6 py-4 rounded-lg shadow-md w-full max-w-sm"

        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export const useNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (message: string) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message }]);

    // Automatically remove notification after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 3000);
  };

  return { showNotification, notifications };
};
