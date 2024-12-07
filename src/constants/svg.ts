import { calenderSvg, feedSvg, postSvg, settingsSvg } from "../../assets/svgs/BottomBarIcons";
import { HamburgerIcon, crossIcon, editIcon } from "../../assets/svgs/FeedScreenIcons";
import { Theme } from "./Theme";

export const svg={
    activeFeedIcon:feedSvg(Theme.bottomBarActiveText),
    InActiveFeedIcon:feedSvg(Theme.bottomBarInactiveText),
    activePostIcon:postSvg(Theme.bottomBarActiveText),
    InActivePostIcon:postSvg(Theme.bottomBarInactiveText),
    activeCalenderIcon:calenderSvg(Theme.bottomBarActiveText),
    InActiveCalenderIcon:calenderSvg(Theme.bottomBarInactiveText),
    activeSettingsIcon:settingsSvg(Theme.bottomBarActiveText),
    InActiveSettingsIcon:settingsSvg(Theme.bottomBarInactiveText),
    hamBurger:HamburgerIcon,
    cross:crossIcon,
    edit:editIcon,
    
}