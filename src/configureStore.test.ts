import { configureStore } from "./configureStore";

describe("configureStore", () => {
  describe("public interface", () => {
    it("generates store with reducer", () => {
      const state = 2;
      const store = configureStore(() => state);
      expect(store.getState).toBeInstanceOf(Function);

      expect(store.dispatch).toBeInstanceOf(Function);
      expect(store.subscribe).toBeInstanceOf(Function);
      expect(store.subscribe(jest.fn())).toBeInstanceOf(Function);
    });
  });

  describe("functional interface", () => {
    it("returns state based on initial state", () => {
      const state = { name: "Bob" };
      expect(configureStore(() => null).getState()).toBe(undefined);
      expect(configureStore(() => null, state).getState()).toBe(state);
    });

    it("calculates new state with reducer call", () => {
      const action1 = { type: "xxx" };
      const action2 = { type: "yyy" };
      const reducer = jest.fn((state = 1) => state + 1);
      const store = configureStore(reducer);
      store.dispatch(action1);
      expect(reducer).toHaveBeenCalledWith(undefined, action1);
      expect(store.getState()).toBe(2);
      store.dispatch(action2);
      expect(reducer).toHaveBeenCalledWith(2, action2);
      expect(store.getState()).toBe(3);
    });
  });
});
