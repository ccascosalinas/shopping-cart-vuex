import Media from '../service/media.js'

export default ({$axios}, inject) =>{
  const api = {media: Media()};
  inject('api', api)
}