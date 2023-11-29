import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import {Breadcrumb, Switch, Dropdown, ColorPicker, ColorPickerProps, Col} from 'antd'
import type { MenuProps } from 'antd'
import styles from './index.module.less'
import { useStore } from '@/store'
import storage from '@/utils/storage'
import BreadCrumb from './BreadCrumb'
import {useEffect, useMemo, useState} from 'react'
import {Color} from "antd/es/color-picker";
const NavHeader = () => {
  const { userInfo, collapsed, isDark,color, updateCollapsed, updateTheme,updateColor } = useStore()
  useEffect(() => {
    handleSwitch(isDark)

  }, [])
  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：' + userInfo.userEmail
    },
    {
      key: 'logout',
      label: '退出'
    }
  ]

  // 控制菜单图标关闭和展开
  const toggleCollapsed = () => {
    updateCollapsed()
  }

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      storage.remove('token')
      location.href = '/login?callback=' + encodeURIComponent(location.href)
    }
  }

  const handleSwitch = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.dataset.theme = 'dark'
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.dataset.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    storage.set('isDark', isDark)
    updateTheme(isDark)
  }

	const [formatHex, setFormatHex] = useState<ColorPickerProps['format']>('hex');
	const [colorHex, setColorHex] = useState<Color | string>(color);
	const handleColor = (value:Color,hex:string)=>{
		setColorHex(hex)
        storage.set('color', hex)
		updateColor(hex)
	}

	const hexString = useMemo(
		() => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()),
		[colorHex],
	);

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <div onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
        </div>
        <BreadCrumb />
      </div>
      <div className={styles.right}>
		<Col>
			<ColorPicker
				format={formatHex}
				value={colorHex}
				onChange={handleColor}
			/>
		</Col>
			HEX: <span>{hexString}</span>
        <Switch
          checked={isDark}
          checkedChildren='暗黑'
          unCheckedChildren='默认'
          style={{ marginRight: 10 }}
          onChange={handleSwitch}
        />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.nickName}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
