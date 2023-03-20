import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from '@/app/providers/store-provider'
import { ReducersList } from '@/shared/lib/components/dynamic-module-loader'

const defaultAsyncReducers: ReducersList = {}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    )
