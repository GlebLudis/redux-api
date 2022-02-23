export type Store<State = any, Action = { type: string }> = {
  getState(): State | undefined;
  dispatch(action: Action): any;
  subscribe(cb: () => void): () => void;
};

export type Reducer<State, Action> = (
  state: State | undefined,
  action: Action
) => State;

export type Subscriber = () => void;

export function configureStore<State = any, Action = { type: string }>(
  reducer: Reducer<State, Action>,
  state?: State | undefined
): Store<State, Action> {
  const subscribers = new Set<Subscriber>([]);
  const getState = (): State | undefined => state;
  const dispatch = (action: Action) => {
    state = reducer(state, action);
    subscribers.forEach((el) => {
      el();
    });
  };
  const subscribe = (subscriber: Subscriber) => {
    subscribers.add(subscriber);
    return () => {
      subscribers.delete(subscriber);
    };
  };
  const store = {
    getState,
    dispatch,
    subscribe,
  };

  return store;
}
