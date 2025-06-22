import Link from 'next/link'
import Left from '@/components/icon/left'
import styles from './style.module.css'

export default function Home() {
  return (
    <>
      <Link href="/" className="back">
        <Left />
      </Link>
      <p className="title">快来拆礼物吧 🎁</p>
      <Link href="/birthday/2025" className={styles.item}>
        <img src="/image/gift-heart.png" alt="" />
        <span>2025</span>
      </Link>
      <div className={styles.item}>
        <img src="/image/gift-heart.png" alt="" />
        <span>2026</span>
      </div>
    </>
  )
}
