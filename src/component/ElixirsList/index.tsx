import { FC, memo } from "react";
import { Elixir } from "../../utils/interface";

interface ElixirsListProps {
  data: Elixir[];
}

const ElixirsItem: FC<{ elixir: Elixir }> = memo(({ elixir }) => {
  return (
    <div className="elixirs-item-container">
      {elixir?.name && <span className="title">{elixir.name}</span>}
      {elixir?.effect && (
        <span className="desc">
          Effect: <b>{elixir.effect}</b>
        </span>
      )}
      {elixir?.difficulty && (
        <span className="desc">
          Difficulty: <b>{elixir.difficulty}</b>
        </span>
      )}
      {elixir?.manufacturer && (
        <span className="desc">
          Manufacture: <b>{elixir?.manufacturer}</b>
        </span>
      )}
      {elixir?.ingredients?.length > 0 && (
        <div className="list-container">
          <span className="title">Ingredients</span>

          {elixir?.ingredients?.map((ingredient, ingredientIndex) => (
            <span className="chip" key={ingredient?.id || ingredientIndex}>
              {ingredient.name}
            </span>
          ))}
        </div>
      )}
      {elixir?.inventors?.length > 0 && (
        <div className="list-container">
          <span className="title">Inventor Full Name</span>

          {elixir?.inventors?.map((inventor, inventorIndex) => (
            <span className="chip" key={inventor?.id || inventorIndex}>
              {`${inventor?.firstName}${
                inventor?.lastName ? ` ${inventor?.lastName}` : ""
              }`}
            </span>
          ))}
        </div>
      )}
    </div>
  );
});

const ElixirsList: FC<ElixirsListProps> = ({ data }) => {
  return data?.length > 0 ? (
    <div className="elixirs-list-container">
      {data.map((elixir) => (
        <ElixirsItem key={elixir.id} elixir={elixir} />
      ))}
    </div>
  ) : (
    <div className="elixirs-not-found-container">
      <p>No Elixirs Found</p>
    </div>
  );
};

export default memo(ElixirsList);
