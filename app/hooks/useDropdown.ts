import { useState, useRef, useEffect } from 'react';

export function useDropdown<T extends HTMLElement>() {
  const [open, setOpen] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    // function handleScroll(event: Event) {
    //   if (ref.current && !ref.current.contains(event.target as Node)) {
    //     setOpen(false);
    //   }
    // }

    document.addEventListener('mousedown', handleClickOutside);
    // window.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return { open, setOpen, ref };
}
