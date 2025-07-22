'use client';

import { RefObject, useEffect } from "react";

export default function useOutsideClick(
    ref: RefObject<HTMLElement> | RefObject<HTMLElement>[], 
    onClickOutside: () => void
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (Array.isArray(ref)) {
                if (ref.every(currentRef => currentRef.current && !currentRef.current.contains(event.target as Node))) {
                    onClickOutside();
                }
            } else {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    onClickOutside();
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}