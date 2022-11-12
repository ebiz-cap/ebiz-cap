const URL_SOURCES = {
  localhost: process.env.REACT_APP_URL_LOCALHOST,
  vmPublic: process.env.REACT_APP_URL_VMPUBLIC,
  vmPrivate: process.env.REACT_APP_URL_VMPRIVATE,
};

// 개발-배포 환경 변경 시 이쪽만 수정
const URL = URL_SOURCES.localhost;

const PORT = {
  flask: process.env.REACT_APP_PORT_FLASK,
  node: process.env.REACT_APP_PORT_NODE,
  db: process.env.REACT_APP_PORT_DB,
};

module.exports = { URL, PORT };
