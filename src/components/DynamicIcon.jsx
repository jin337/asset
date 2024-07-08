import {} from 'react'
import * as ArcoIcons from '@arco-design/web-react/icon'

const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = ArcoIcons[name] || null

  return IconComponent && <IconComponent {...props} />
}

export default DynamicIcon
