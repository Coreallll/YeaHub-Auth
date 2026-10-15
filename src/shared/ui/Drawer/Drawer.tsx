import {createPortal} from "react-dom";
import {type ReactNode, type Ref, useEffect} from "react";

interface DrawerProps {
  drawerRef: Ref<HTMLDivElement>;
  isOpen?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Drawer({ drawerRef, isOpen, children, className=""}: DrawerProps) {


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return createPortal(
    <div
      ref={drawerRef}
      onClick={(event) => event.stopPropagation()}
      className={className}
    >
      {children}
    </div>,
    document.body
  )
}