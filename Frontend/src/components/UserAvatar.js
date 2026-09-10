import React, { useState, useEffect } from "react";

export default function UserAvatar({ user, size = "md", className = "" }) {
  const [imgError, setImgError] = useState(false);

  const currentUser =
    user !== undefined
      ? user
      : (() => {
          try {
            return JSON.parse(localStorage.getItem("user")) || {};
          } catch {
            return {};
          }
        })();

  const imageUrl = currentUser?.imageUrl;

  useEffect(() => {
    setImgError(false);
  }, [imageUrl]);

  const initials = (
    (currentUser?.firstName ? currentUser.firstName[0] : "") +
    (currentUser?.lastName ? currentUser.lastName[0] : "")
  ).toUpperCase();

  const sizeMap = {
    sm: {
      container: "h-8 w-8 text-xs",
      icon: "h-4 w-4",
    },
    md: {
      container: "h-10 w-10 text-sm",
      icon: "h-6 w-6",
    },
    lg: {
      container: "h-12 w-12 text-base",
      icon: "h-7 w-7",
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (imageUrl && !imgError) {
    return (
      <img
        src={imageUrl}
        alt={
          initials
            ? `${currentUser?.firstName || "User"}'s profile`
            : "User profile"
        }
        className={`${currentSize.container} rounded-full object-cover ${className}`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className={`${currentSize.container} flex items-center justify-center rounded-full bg-blue-600 font-semibold text-white select-none ${className}`}
      aria-label="User avatar"
    >
      {initials ? (
        <span>{initials}</span>
      ) : (
        <svg
          className={`${currentSize.icon} text-white`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
    </div>
  );
}
