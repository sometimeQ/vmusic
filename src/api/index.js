// 引入需要的组件
import network from './network'

// 封装请求的接口  使用箭头函数定义函数
export const getBanner = () => network.get('banner?type=2')