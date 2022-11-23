import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import testProfileImg from "../../../env/imgsrc/test_profileImg.jpg";

//
import { useNavigate } from "react-router-dom";

//
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { update } from "../../../store/user/mobUserFooterSlice";
import "./MobUserFooter.css";

import { setDesignerFooter } from "store/designer/designerFooterSlice";
//
import styled from "styled-components";

const MobFooter = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //
  const customerTabType = useSelector((state: RootState) => {
    return state.mobUserFooter.value;
  });

  const designerTabType = useSelector((state: RootState) => {
    return state.designerFooter.value;
  });

  const setCustomerTabType = (tabStr: String) => {
    dispatch(update(tabStr));
  };
  const setDesignerTabType = (tabStr: String) => {
    dispatch(setDesignerFooter(tabStr));
  };

  const setUserTabTypeCall = (isCustomer: boolean, tabStr: String) => {
    if (isCustomer) {
      setCustomerTabType(tabStr);
    } else {
      setDesignerTabType(tabStr);
    }
    let userType = isCustomer ? "customer" : "designer";

    console.log(`[FooterDestPath]: ${userType} -- ${tabStr}`);
    navigate(`/${userType}/${tabStr}`);
  };

  //
  const isLoggedNDesigner = useSelector((state: RootState) => {
    return state.isLoggedNDesigner.value;
  });

  //

  //
  const CustomerFooterContents = (): JSX.Element => {
    return (
      <FooterContents className="customerFooterContents">
        <IconBox
          onClick={() => {
            setUserTabTypeCall(true, "home");
          }}
        >
          {customerTabType === "home" ? (
            <HomeIcon color="action" className="onIcon" />
          ) : (
            <HomeOutlinedIcon color="action" className="icon" />
          )}

          <div className="icon-text">홈</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(true, "search");
          }}
        >
          {customerTabType === "search" ? (
            <ContentCutIcon className="onIcon" />
          ) : (
            <ContentCutOutlinedIcon className="icon" />
          )}

          <div className="icon-text">검색</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(true, "trend");
          }}
        >
          {customerTabType === "trend" ? (
            <WhatshotIcon className="onIcon" />
          ) : (
            <WhatshotOutlinedIcon className="icon" />
          )}

          <div className="icon-text">트렌드</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(true, "community");
          }}
        >
          {customerTabType === "community" ? (
            <AccountBalanceIcon className="onIcon" />
          ) : (
            <AccountBalanceOutlinedIcon className="icon" />
          )}

          <div className="icon-text">커뮤니티</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(true, "myPage");
          }}
        >
          {/* {customerTabType === "myPage" ? (
            <AccountCircleIcon className="onIcon" />
          ) : (
            <AccountCircleOutlinedIcon className="icon" />
          )} */}
          <img
            style={{
              width: "43px",
              borderRadius: "100px",
            }}
            src={testProfileImg}
            alt="toMyPage"
          />
        </IconBox>
      </FooterContents>
    );
  };

  const DesignerFooterContents = (): JSX.Element => {
    return (
      <FooterContents className="designerFooterContents">
        <IconBox
          onClick={() => {
            setUserTabTypeCall(false, "home");
          }}
        >
          {designerTabType === "home" ? (
            <HomeIcon color="action" className="onIcon" />
          ) : (
            <HomeOutlinedIcon color="action" className="icon" />
          )}
          <div className="icon-text">홈</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(false, "trend");
          }}
        >
          {designerTabType === "trend" ? (
            <WhatshotIcon className="onIcon" />
          ) : (
            <WhatshotOutlinedIcon className="icon" />
          )}
          <div className="icon-text">트렌드</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(false, "community");
          }}
        >
          {designerTabType === "community" ? (
            <AccountBalanceIcon className="onIcon" />
          ) : (
            <AccountBalanceOutlinedIcon className="icon" />
          )}
          <div className="icon-text">커뮤니티</div>
        </IconBox>

        <IconBox
          onClick={() => {
            setUserTabTypeCall(false, "myPage");
          }}
        >
          <img
            style={{
              width: "43px",
              borderRadius: "100px",
            }}
            src={testProfileImg}
            alt="toMyPage"
          />
        </IconBox>
      </FooterContents>
    );
  };

  return (
    <MobFooterContainer
      className={
        isLoggedNDesigner.isLoggedIn ? "active-footer" : "inactive-footer"
      }
    >
      {isLoggedNDesigner.isLoggedIn ? (
        isLoggedNDesigner.isDesigner ? (
          <DesignerFooterContents />
        ) : (
          <CustomerFooterContents />
        )
      ) : (
        <></>
      )}
    </MobFooterContainer>
  );
};

export default MobFooter;

const MobFooterContainer = styled.footer`
  display: ${(props) =>
    props.className === "active-footer" ? "inline-block" : "none"};
`;

const FooterContents = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: grey;
`;
