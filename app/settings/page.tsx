import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"

export default function SettingsPage() {
    return (
        <div>
            <h1>Settings</h1>
            <Link href={"/"}>
                <button className={styles["button"]}>
                    Go to home page
                </button>
            </Link>
        </div>
    )
}