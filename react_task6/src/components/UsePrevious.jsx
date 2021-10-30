import { useState, useEffect, useRef } from "react";

function UsePrevious() {
  const [count, setCount] = useState(0);
  const prevCount = usePreviousHook(count);

  return (
    <div className="wrapper-hook_usePre">
      <h1>Realization of a custom usePrevious hook</h1>
      <button className="btn_hookPrevious" onClick={() => setCount(count + 1)}>
        Click on me
      </button>
      <h2>
        Now: {count}, before: {prevCount}
      </h2>
    </div>
  );
}

function usePreviousHook(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default UsePrevious;
