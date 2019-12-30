import {
  PLAY_SOUND
} from 'common/lib/core/actions/audio'

const webAudioMiddleware = store => next => async action => {

  if (action) {
    if (action.type === PLAY_SOUND) {

    }
  }
  return next(action)
}
export default webAudioMiddleware
