import { useRef, useEffect, EffectCallback, DependencyList } from "react";

export const useEffectDidMount = (
  func: EffectCallback,
  deps: DependencyList
) => {
  const initial = useRef(true);

  useEffect(() => {
    if (!initial.current) {
      func();
    } else {
      initial.current = false;
    }
  }, deps);
};
