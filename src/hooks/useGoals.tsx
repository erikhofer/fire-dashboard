import { useSelector } from 'react-redux'
import { AppState, Goals } from '../store/model'

export const useGoals = () =>
  useSelector<AppState, Goals>(state => state.profile.goals)
