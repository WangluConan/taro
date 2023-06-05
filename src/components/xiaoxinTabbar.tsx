import home from '../images/home.svg'
import check from '../images/check.svg'
import integral from '../images/integral.svg'
import interaction from '../images/interaction.svg'
import person from '../images/person.svg'
import './xiaoxinTabbar.css'
import {
    Tabbar, TabbarItem
} from "@nutui/nutui-react-taro";
const XiaoxinTabbar = () => (
    <Tabbar bottom unactiveColor="#7d7e80" activeColor="#2d60df" className='Tabbar'>
        <TabbarItem tabTitle="首页" href="" icon={home} />
        <TabbarItem tabTitle="考勤" icon={check} />
        <TabbarItem tabTitle="积分" icon={integral} />
        <TabbarItem tabTitle="互动" icon={interaction} />
        <TabbarItem tabTitle="个人" href="/" icon={person} />
    </Tabbar>
);

export { XiaoxinTabbar };