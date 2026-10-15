import { type RefObject, useEffect } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLDivElement | null>,
  callback: () => void,
  buttonRef: RefObject<HTMLButtonElement | null>,
): void {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const drawer = ref?.current;
      const button = buttonRef?.current;

      if (!drawer) return;
      const target = event.target;

      if (!(target instanceof Node)) return;

      const clickInsideDrawer = drawer.contains(target);
      const clickInsideButton = button?.contains(target);

      if (!clickInsideDrawer && !clickInsideButton) {
        callback();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback, buttonRef]);
}
