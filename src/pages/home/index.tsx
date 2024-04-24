import { FC, memo } from "react";
import FilterComponent from "../../component/FilterComponent";
import HomeModel from "../../models/home";
import "./index.scss";
import ElixirsList from "../../component/ElixirsList";

const Home: FC = () => {
  const { data, loading, filter, handleChange, clearFilters, handleSubmit } =
    HomeModel();

  return (
    <div className="home-container">
      <FilterComponent
        filter={filter}
        handleChange={handleChange}
        clearFilters={clearFilters}
        handleSubmit={handleSubmit}
      />
      {loading && (
        <div className="loading-container">
          <div className="loader" />
        </div>
      )}
      <ElixirsList data={data} />
    </div>
  );
};

export default memo(Home);
