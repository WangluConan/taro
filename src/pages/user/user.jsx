import React, { Component, useState } from 'react';
import { Image } from "@tarojs/components";
import { Text, View } from "@tarojs/components";
import Taro from '@tarojs/taro';

import { Tabbar, TabbarItem } from '@nutui/nutui-react-taro';

import '../user/user.css';

const User = () => {

    let clickLogins = "点击立刻登录";

    return (
        <View className='user_main'>
            <View className='user_container'>
                <div className='user_hand'>u</div>
                <View className='notLogin'>
                    <View className='bindingStuId' >{clickLogins}</View>

                </View>
            </View>

            <View className='user_tools'>
                <Text className='tool_title'>常用工具</Text>
                <View className='tools'>
                    {/* <Tabbar onSwitch={(child, idx) => { console.log(idx) }}> */}
                        <TabbarItem tabTitle="首页" icon="home" />
                        <TabbarItem tabTitle="分类" icon="category" />
                        <TabbarItem tabTitle="发现" icon="find" />
                        <TabbarItem tabTitle="购物车" icon="cart" />
                    {/* </Tabbar> */}
                    {/* <Tool toolText={"消息中心"} toolValue={"xiaoxizhongxin"} />
                    <Tool toolText={"活动"} toolValue={"shouye"} />
                    <Tool toolText={"我的收藏"} toolValue={"31shoucang"} />
                    <Tool toolText={"系统设置"} toolValue={"quanjushezhi_o"} /> */}
                </View>
            </View>
        </View>

    )
}
export default User
