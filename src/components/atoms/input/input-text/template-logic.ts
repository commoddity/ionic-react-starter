import { RefObject, useEffect, useRef, useState } from "react";

export const useTextInputTemplate = (
  value: string,
): {
  isActive: boolean;
  toggleFocus: () => void;
  toggleBlur: (value: string) => void;
  inputRef: RefObject<HTMLInputElement>;
} => {
  const [isActive, setIsActive] = useState(value !== "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value !== "") {
      setIsActive(true);
    }
  }, [value]);

  const toggleFocus = () => {
    setIsActive(true);
    inputRef.current?.focus();
  };

  const toggleBlur = (value: string) => {
    if (value === "") {
      setIsActive(false);
      inputRef.current?.blur();
    }
  };

  return { isActive, toggleFocus, toggleBlur, inputRef };
};
