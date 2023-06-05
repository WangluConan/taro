import React, { useState } from 'react'
import { View } from '@tarojs/components'
import {
  Button, Tabbar, TabbarItem
} from "@nutui/nutui-react-taro";
import Taro from '@tarojs/taro';
import './index.css'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
      <Tabbar bottom>
        <TabbarItem tabTitle="首页" href="" icon="home" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
        <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon="cart" />
        <View className="user" onClick={() => {
          Taro.navigateTo({
            url: '../user/user'
          })
        }}>
          <TabbarItem tabTitle="我的" href="" icon="my" /></View>
      </Tabbar>
    </View>
  )
}

export default Index
