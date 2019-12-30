import {
  PLAY_SOUND
} from 'common/lib/core/actions/audio'

const webAudioMiddleware = store => next => async action => {

  if (action) {
    if (action.type === PLAY_SOUND) {
      var audio = new Audio(action.webSource)
      if (action.loop) {
        audio.loop = true
      }
      audio.volume = action.volume
      audio.play();
    }
  }
  return next(action)
}
export default webAudioMiddleware
