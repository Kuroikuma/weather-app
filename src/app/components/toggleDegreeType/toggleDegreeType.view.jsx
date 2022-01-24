import "./toggleDegreeType.style.css";

export const ToggleDegreeTypeView = (props) => {
  const { handletypeDegree, typeDegree, isLoading } = props;
  return (
    <>
      <div className="ToggleContainer">
        {isLoading ? null : (
          <>
            <div className="ToggleContainerleft">
              <button
                onClick={handletypeDegree}
                name="C"
                id="celciusButton"
                className={typeDegree}
              >
                ºC
              </button>
              <button
                onClick={handletypeDegree}
                name="F"
                id="fahrenheitButton"
                className={typeDegree}
              >
                ºF
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
