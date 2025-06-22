import Link from 'next/link'
import styles from './style.module.css'

export default function Home() {
  return (
    <>
      <p className="title">Hello, coco ❤️</p>
      <div>
        <Link href="/letter" className={styles.item}>
          <img src="/image/letter.png" alt="" />
          <span>情书</span>
        </Link>
        <Link href="/birthday" className={styles.item}>
          <img src="/image/gift-heart.png" alt="" />
          <span>生日礼物</span>
        </Link>
      </div>
    </>
  )
}
