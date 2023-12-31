import { useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full">
      <label className=" text-sm text-black" htmlFor={props.name}>
        {label}
      </label>

      <input
        className="mt-2   w-full rounded-md  bg-[#F8F8FB] p-3 text-black  placeholder:text-[#B4B3C1] "
        {...field}
        {...props}
        autoComplete="off"
      />
      {meta.touched && meta.error ? (
        <p className="text-sm text-red-400"> {meta.error}</p>
      ) : null}
    </div>
  );
};
const Button = ({ children, onClick }) => {
  return (
    <button className="text-base px-4 text-white py-3 border rounded-lg cursor-pointer bg-black" onClick={onClick}>
      {children}
    </button>
  );
};

export { Input, Button };
