import React from 'react'

import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
          <span>😄</span>
          <br />
          Ничего не найдено 
      </h1>
      <div className={styles.description}>
        <p> Вероятней всего, вы не заказывали ещё пиццу.</p>
        <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      </div>
    </div>
    
  )
}

export default NotFoundBlock;