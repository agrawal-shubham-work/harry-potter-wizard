import { FC, memo } from "react";
import { FilterState } from "../../utils/interface";
import TextInput from "../TextBox";

interface FilterComponentProps {
  filter: FilterState;
  handleChange: (key: string, value: string) => void;
  clearFilters: () => void;
  handleSubmit: () => void;
}

const FilterComponent: FC<FilterComponentProps> = ({
  filter,
  handleChange,
  clearFilters,
  handleSubmit,
}) => {
  return (
    <>
      <p style={{ marginBottom: "10px", fontSize: 22, fontWeight: 700 }}>
        Filters
      </p>
      <form
        className="filter-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          name="Name"
          type="text"
          value={filter.Name}
          placeholder={"Name"}
          setFilterValue={(value) => handleChange("Name", value)}
        />
        <TextInput
          type="text"
          name="Difficulty"
          value={filter.Difficulty}
          placeholder={"Difficulty"}
          setFilterValue={(value) => handleChange("Difficulty", value)}
        />
        <TextInput
          type="text"
          name="Ingredient"
          value={filter.Ingredient}
          placeholder={"Ingredient"}
          setFilterValue={(value) => handleChange("Ingredient", value)}
        />
        <TextInput
          type="text"
          name="InventorFullName"
          value={filter.InventorFullName}
          placeholder={"InventorFullName"}
          setFilterValue={(value) => handleChange("InventorFullName", value)}
        />
        <TextInput
          type="text"
          name="Manufacturer"
          value={filter.Manufacturer}
          placeholder={"Manufacturer"}
          setFilterValue={(value) => handleChange("Manufacturer", value)}
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <button className="clear-btn" type="button" onClick={clearFilters}>
          Reset Filters
        </button>
      </form>
    </>
  );
};

export default memo(FilterComponent);
