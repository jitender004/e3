export const Pagination = ({ total, selected, onPageChange }) => {
  console.log(total);
  return (
    <div className="pageContainer">
      <div className="flex">
        {total.map((item,index) => {
          return <p key={index} >{item}</p>;
        })}
      </div>
      <button onClick={onPageChange}>{"<"} </button>
      <button onClick={onPageChange}>{">"}</button>
    </div>
  );
};
