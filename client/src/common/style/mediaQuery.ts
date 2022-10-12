import MediaQuery, { useMediaQuery } from "react-responsive";

const Desktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  return isDesktop ? children : null;
};

const Mobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return isMobile ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
const Default = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isNotMobile = useMediaQuery({ minWidth: 769 });
  return isNotMobile ? children : null;
};

export { Desktop, Mobile, Default };
