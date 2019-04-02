import config from '../config'

const CONTEXTPATH = config.BaseUrl
export default {
  FETCH_USER_INFO: `${CONTEXTPATH}v2/movie/in_theaters`
}
