const RadioField = ({ handleChangeRadio, value, name, title }) => {
  return (
    <>
      <label
        htmlFor="Option1"
        className="flex cursor-pointer items-start gap-4"
      >
        <div className="flex items-center">
          &#8203;
          <input
            type="radio"
            name={name}
            onChange={handleChangeRadio}
            value={value}
            className="size-4 rounded border-gray-300"
            id="Option1"
          />{" "}
          &nbsp;{title}
        </div>
      </label>
    </>
  );
};

export default RadioField;
