import IndexView from '../view/index';
import TopicView from '../view/topic';
import UndefiendView from '../view/404';

const routes = [
  {
    path: "/",
    exact: true,
    render(props) {
      return <IndexView {...props} />
    }
  }, {
    path: "/TopicView",
    exact: true,
    render(props) {
      return <TopicView {...props} />
    }
  }, {
    path: "/UndefiendView",
    exact: true,
    render(props) {
      return <UndefiendView {...props} />
    }
  },
]
const navs = [
  {
    title: "首页",
    to: "/",
  }, {
    title: "新手入门",
    to: "/getstart",
  }, {
    title: "API",
    to: "/api",
  }, {
    title: "关于",
    to: "/about",
  },
]
const indexNavs = [
  {
    title: "全部",
    to: "/?tab=all",
  },
  {
    title: "精华",
    to: "/?tab=good",
  }, {
    title: "分享",
    to: "/?tab=share",
  }, {
    title: "问答",
    to: "/?tab=ask",
  }, {
    title: "招聘",
    to: "/?tab=job",
  }, {
    title: "客户端测试",
    to: "/?tab=dev",
  },
]
export { routes, navs, indexNavs}