import { useEffect, useRef } from "react";

type prop = {
  children: React.ReactNode;
  isopen: boolean;
  btn: React.ReactNode;
  setIsOpen: (isopen: boolean) => void;
};

export default function Dialog({ children, btn, isopen, setIsOpen }: prop) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isopen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isopen]);

  return (
    <>
      {btn}
      <dialog
        ref={ref}
        id="model"
        onCancel={() => setIsOpen(false)}
        className="dialog" /* Fixed: Added class back */
      >
     
              <div className="dialog-contient">   <div className="dialog-header">
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>إضافة  جديد</span>
          <button id="close-dialog" onClick={() => setIsOpen(false)}>
            إغلاق ×
          </button>
              </div>
        {children}</div>
      </dialog>
    </>
  );
}