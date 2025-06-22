import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Confetti from 'react-confetti'
import Left from '@/components/icon/left'
import Note from '@/components/icon/note'
import styles from './style.module.css'

const gifts = [
  {
    id: 0,
    name: '玉桂狗保温杯',
    img: '/image/yuguigou.png'
  },
  {
    id: 1,
    name: 'YSL黑管唇釉',
    img: '/image/ysl.png'
  },
  {
    id: 2,
    name: '冒险吧伊布系列盲盒',
    img: '/image/yibu.png'
  },
  {
    id: 3,
    name: '男模一名',
    img: '/image/model.png'
  }
]

export default function Home({ audio }) {
  const [isConfetiShow, setIsConfetiShow] = useState(false)
  const [currentGift, setCurrentGift] = useState({})
  const [isEating, setIsEating] = useState(false)
  const [rightPx, setRightPx] = useState(0)

  const cakeRef = useRef(null)

  const openGift1 = (gift) => {
    setIsConfetiShow(true)
    setCurrentGift(gift)
  }

  const hideGift = () => {
    setIsConfetiShow(false)
  }

  const eatCake = () => {
    setIsEating(true)
    audio.pause()
  }

  useEffect(() => {
    if (cakeRef.current) {
      const { x, width } = cakeRef.current.getBoundingClientRect()
      setRightPx(screen.width - width - x - 110)
    }
  }, [cakeRef])

  return (
    <>
      <Link href="/birthday" className="back">
        <Left />
      </Link>
      <p className="title">2025</p>
      <div className={styles.home}>
        {gifts.map((item, index) => {
          return (
            <div key={item.id} className={styles.gift} onClick={() => openGift1(item)}>
              <img src="/image/gift.png" alt="" />
              <p className={styles.text}>礼物{index + 1}</p>
            </div>
          )
        })}
      </div>
      {isConfetiShow && (
        <div className={styles.confetti} onClick={hideGift}>
          <Confetti gravity={0.2} />
          <div className={styles.open}>
            <img src={currentGift.img} alt="" />
            <p className={styles.text}>{currentGift.name}</p>
          </div>
        </div>
      )}
      <img src="/image/cake.png" alt="" className={styles.cake} ref={cakeRef} />
      <div
        className={styles.chouchouni}
        style={
          isEating
            ? {
                right: rightPx
              }
            : {}
        }
        onClick={eatCake}
      >
        <img src="/image/chouchouni.png" alt="" />
        {isEating ? (
          <>
            <span className={`${styles.note} ${styles.note1}`}>
              <Note />
            </span>
            <span className={`${styles.note} ${styles.note2}`}>
              <Note />
            </span>
            <span className={`${styles.note} ${styles.note3}`}>
              <Note />
            </span>
          </>
        ) : null}
      </div>
    </>
  )
}
