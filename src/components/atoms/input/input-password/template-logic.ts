import { RefObject, useEffect, useRef, useState } from "react";

export const usePasswordInputTemplate = (
  value: string,
): {
  isActive: boolean;
  toggleFocus: () => void;
  toggleBlur: (value: string) => void;
  inputRef: RefObject<HTMLInputElement>;
  passwordHidden: boolean;
  togglePasswordVisibility: () => void;
} => {
  const [isActive, setIsActive] = useState(value !== "");
  const [passwordHidden, setPasswordHidden] = useState(true);
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

  const togglePasswordVisibility = () => setPasswordHidden(!passwordHidden);

  return {
    isActive,
    toggleFocus,
    toggleBlur,
    inputRef,
    passwordHidden,
    togglePasswordVisibility,
  };
};
