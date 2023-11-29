import styles from './index.module.less'
import {useStore} from "@/store";
export default function Login() {
	const {color} = useStore()
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div style={{color:color}} className={styles.title}>React18通用后台管理系统</div>
        <div className={styles.desc}>前端：React18+ReactRouter6.0+AntD5.4+TypeScript5.0+Vite实现前端</div>
				<div className={styles.desc}>后端：Go+Gin+Gorm+excelize+postgresql实现通用后端</div>
      </div>
      <div className={styles.img}></div>
    </div>
  )
}
