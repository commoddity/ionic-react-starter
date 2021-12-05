import { Icon } from "~atoms";
import { usePasswordInputTemplate } from "./template-logic";

export type PasswordInputTemplateProps = {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  name: string;
  errorMessage: string | undefined;
};

export const PasswordInputTemplate = ({
  placeholder,
  value,
  onChange,
  name,
  errorMessage,
}: PasswordInputTemplateProps): JSX.Element => {
  const {
    isActive,
    toggleFocus,
    toggleBlur,
    inputRef,
    passwordHidden,
    togglePasswordVisibility,
  } = usePasswordInputTemplate(value);

  return (
    <div>
      <div
        className={`flex items-center justify-between px-3 border ${
          errorMessage ? "border-orange-600" : "border-gray-100"
        } ${errorMessage ? "bg-orange-50" : ""} rounded-md`}
      >
        <div className="w-full relative pt-4 pb-2 text-input-animation">
          <input
            autoCapitalize="none"
            autoComplete="new-password"
            name={name}
            ref={inputRef}
            onBlur={() => toggleBlur(value)}
            onFocus={toggleFocus}
            onChange={onChange}
            type={passwordHidden ? "password" : "text"}
            value={value}
            className={`w-full border-none outline-none font-normal pr-3 ${
              errorMessage ? "bg-orange-50" : ""
            }`}
          />
          <div
            className={`absolute ${isActive ? "is-focused" : "not-focused"} h-8`}
            onClick={toggleFocus}
          >
            {placeholder}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="block focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            <Icon variant={passwordHidden ? "passwordShow" : "passwordHide"} size={24} />
          </button>
        </div>
      </div>
      {errorMessage ? (
        <div className="text-left text-xs text-orange-600 ml-2 mt-1">{errorMessage}</div>
      ) : null}
    </div>
  );
};
