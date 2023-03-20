import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema, StateSchemaKey, ReducerManagerProps } from './state-schema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManagerProps {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          // @ts-expect-error
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key]
        })
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
