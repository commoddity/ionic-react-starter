import { useTextInputTemplate } from "./template-logic";

export type TextInputTemplateProps = {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  name: string;
  errorMessage: string | undefined;
};

export const TextInputTemplate = ({
  placeholder,
  value,
  onChange,
  name,
  errorMessage,
}: TextInputTemplateProps): JSX.Element => {
  const { isActive, toggleFocus, toggleBlur, inputRef } = useTextInputTemplate(
    value,
  );

  return (
    <div>
      <div
        className={`w-full relative px-3 pt-4 pb-2 border ${
          errorMessage ? "border-orange-600" : "border-gray-100"
        } ${
          errorMessage ? "bg-orange-50" : ""
        } rounded-md text-input-animation`}
      >
        <input
          autoCapitalize="none"
          autoComplete="new-password"
          name={name}
          ref={inputRef}
          onFocus={toggleFocus}
          onBlur={() => toggleBlur(value)}
          onChange={onChange}
          type="text"
          value={value}
          className={`w-full border-none outline-none font-normal ${
            errorMessage ? "bg-orange-50" : "bg-transparent"
          }`}
        />
        <div
          className={`absolute ${isActive ? "is-focused" : "not-focused"} h-8`}
          onClick={toggleFocus}
        >
          {placeholder}
        </div>
      </div>
      {errorMessage ? (
        <div className="text-left text-xs text-orange-600 ml-2 mt-1">
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};
