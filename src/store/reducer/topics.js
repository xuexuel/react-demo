function topics(topics = {
  loading: true,
  data:[]
}, action) {
  switch (action.type) {
    case "TOPICS_LOAD":
      return {
        loading: true,
        data:[]
      }
    case "TOPICS_GET":
      return {
        loading: false,
        data: action.data
      }
    default:break;
  }
  return topics;
}

export default topics;