// import HistoryTab from "./historyTab";
import DesignerTab from "./designerTab";
import ThirdTab from "./thirdTab";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../store";
import { setUserMypageTab } from "store/UserMypageTabSlice";

const BottomContents = (): JSX.Element => {
  const userMypageTab = useSelector((state: RootState) => {
    return state.userMypageTab.value;
  });

  if (userMypageTab === 1) {
    // return <HistoryTab />;
    return <div></div>;
  } else if (userMypageTab === 2) {
    return <DesignerTab />;
  } else {
    return <ThirdTab />;
  }
};

export default BottomContents;
