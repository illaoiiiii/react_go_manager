import styles from './index.module.less'
const NavFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href='https://github.com/illaoiiiii' target='_blank' rel='noreferrer'>
          David Chai的github
        </a>
        {/*<span className='gutter'>|</span>
        <a href='https://coding.imooc.com/class/644.html' target='_blank' rel='noreferrer'>
          React18+TS开发通用后台（新课）
        </a>
        <span className='gutter'>|</span>
        <a href='https://coding.imooc.com/class/502.html' target='_blank' rel='noreferrer'>
          Vue3全栈后台
        </a>
        <span className='gutter'>|</span>
        <a href='https://coding.imooc.com/class/397.html' target='_blank' rel='noreferrer'>
          Vue全家桶开发小米商城项目
        </a>*/}
      </div>
      <div>Copyright ©2023 React18通用后台 All Rights Reserved.</div>
    </div>
  )
}

export default NavFooter
