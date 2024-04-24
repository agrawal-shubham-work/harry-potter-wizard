import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";

interface TextInputProps {
  name: string;
  value: string;
  type: string;
  setFilterValue: (value: string) => void;
  [key: string]: any;
}

const TextInput: FC<TextInputProps> = ({
  name,
  value: inputValue,
  type = "text",
  setFilterValue,

  ...rest
}) => {
  //state
  const [value, setValue] = useState("");

  //handlers

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = useCallback(() => {
    setFilterValue(value);
  }, [setFilterValue, value]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && setFilterValue) {
        setFilterValue(value);
      }
    },
    [setFilterValue, value]
  );

  //useEffect
  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  return (
    <input
      className={`input ${name}`}
      name={name}
      type={type}
      value={value}
      onChange={handleInputChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

export default memo(TextInput);
