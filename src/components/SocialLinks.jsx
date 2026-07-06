import React from "react";
import "../styles/SocialLinks.css";

// Inline SVG icons to avoid extra dependencies.
const IconButton = ({ href, label, children }) => {
  if (!href) {
    // Keep layout consistent; render disabled-looking button.
    return (
      <span className="social-icon social-icon--disabled" aria-label={label} title={label}>
        {children}
      </span>
    );
  }

  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
};

export default function SocialLinks({ urls = {} }) {
  const {
    facebook = "https://www.facebook.com/profile.php?id=61591425413251",
    instagram = "https://www.instagram.com/makht.aba?utm_source=qr&igsh=MTRoYTB6NHpyamRwNQ%3D%3D",
    x = "",
    linkedin = "",
    youtube = "",
    tiktok = "",
  } = urls;

  return (
    <div className="social-links" aria-label="Social media links">
      <IconButton href={facebook} label="Facebook">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H8.08V12h2.36V9.79c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46V12h2.58l-.41 2.89h-2.17v6.99A10 10 0 0 0 22 12"
          />
        </svg>
      </IconButton>

      <IconButton href={x} label="X (Twitter)">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.9 2H22l-6.77 7.73L23 22h-6.53l-5.1-6.65L4.98 22H2l7.31-8.35L1 2h6.7l4.6 5.98L18.9 2Zm-1.15 18h1.76L6.14 3.92H4.25L17.75 20Z"
          />
        </svg>
      </IconButton>

      <IconButton href={linkedin} label="LinkedIn">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31ZM5.08 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM6.85 20.45H3.3V9h3.55v11.45Z"
          />
        </svg>
      </IconButton>

      <IconButton href={instagram} label="Instagram">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.5-2.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
          />
        </svg>
      </IconButton>

      <IconButton href={youtube} label="YouTube">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21.58 7.19c.2.84.2 2.46.2 4.81s0 3.97-.2 4.81a2.78 2.78 0 0 1-1.95 1.95c-.84.2-2.58.2-6.63.2s-5.79 0-6.63-.2a2.78 2.78 0 0 1-1.95-1.95C3.22 15.97 3.22 14.35 3.22 12s0-3.97.2-4.81A2.78 2.78 0 0 1 5.37 5.24c.84-.2 2.58-.2 6.63-.2s5.79 0 6.63.2a2.78 2.78 0 0 1 1.95 1.95ZM10 15.5l6-3.5-6-3.5v7Z"
          />
        </svg>
      </IconButton>

      <IconButton href={tiktok} label="TikTok">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.6 2c.2 2.1 1.4 3.5 3.4 3.9v3.2c-1.3 0-2.6-.4-3.7-1.1v6.9c0 3.5-2.9 6.4-6.4 6.4S3.5 19.4 3.5 15.9 6.4 9.5 9.9 9.5c.2 0 .4 0 .7.1v3.4c-.2-.1-.4-.1-.7-.1-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2h3.7Z"
          />
        </svg>
      </IconButton>
    </div>
  );
}

