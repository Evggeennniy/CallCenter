"use client";

import * as React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const count = 76;
  return (
    <>
      <div className={styles.welcomeCard}>
        <div className={styles.cardContent}>
          <div className={styles.content}>
            <h5>
            Доброго дня, <span>Ольга!</span>
            </h5>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
  <span style={{ color: "#E6E6E6", fontWeight: 400 }}>
    Ваш середній бал:
  </span>
  <span
    style={{
      background: "#fff",
      color: "#F44336",
      fontWeight: 400,
      borderRadius: 48,
      padding: "6px 10px",
      display: "inline-block",
      minWidth: 20,
      textAlign: "center",
      lineHeight: 1,
    }}
  >
    {count}
  </span>
</div>


            <div className={styles.divider}></div>

            <div className={styles.itemBox}>
              <div className={styles.item}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: "#ECF0FF" }}
                >
                  <i className="material-symbols-outlined text-primary">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_41_3)">
                      <path d="M6.19398 9.19322C6.11494 9.02112 6.09689 8.82722 6.14278 8.64348C6.18868 8.45974 6.2958 8.29711 6.44648 8.18239L6.83398 7.88656C7.04098 7.73131 7.20898 7.53 7.3247 7.29858C7.44041 7.06715 7.50065 6.81197 7.50065 6.55322L7.50065 4.05322C7.50065 3.6112 7.32506 3.18727 7.01249 2.87471C6.69993 2.56215 6.27601 2.38656 5.83398 2.38656L3.33398 2.38656C2.89196 2.38656 2.46803 2.56215 2.15547 2.87471C1.84291 3.18727 1.66732 3.6112 1.66732 4.05322C1.66732 8.03147 3.24767 11.8468 6.06072 14.6598C8.87376 17.4729 12.6891 19.0532 16.6673 19.0532C17.1093 19.0532 17.5333 18.8776 17.8458 18.5651C18.1584 18.2525 18.334 17.8286 18.334 17.3866L18.334 14.8866C18.334 14.4445 18.1584 14.0206 17.8458 13.708C17.5333 13.3955 17.1093 13.2199 16.6673 13.2199L14.1673 13.2199C13.9086 13.2199 13.6534 13.2801 13.422 13.3958C13.1905 13.5116 12.9892 13.6796 12.834 13.8866L12.5415 14.2766C12.4247 14.4295 12.2585 14.5374 12.0712 14.5817C11.8839 14.6261 11.687 14.6042 11.514 14.5199C9.20076 13.381 7.32999 11.5079 6.19398 9.19322Z" stroke="#605DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_41_3">
                      <rect width="20" height="20" fill="white" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 20 20.72)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </i>
                </div>
                <div>
                  <span className={styles.title}>Завдання на сьогодні</span>
                  <span style={{ display: "block" }}>Обробити 30 дзвінків за день</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.image}>
            <img
              src="/img/welcome.png"
              alt="welcome-image"
              width={418}
              height={336}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
