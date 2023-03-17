import React from "react";

const CategoryItem = ({ setEditStatus, setDeleteStatus, category }) => {
  const onClickEdit = () => {
    setEditStatus(true);
  };

  const onClickDelete = () => {
    setDeleteStatus(true);
  };

  return (
    <article className="bg-white rounded p-9 flex items-center gap-4 justify-between shadow-lg">
      <img
        src={category.icon}
        alt="category image"
        className="w-[5rem] h-[5rem]"
      />
      <h4 className="text-xl font-medium capitalize grow">{category.name}</h4>
      <div className="flex gap-12">
        <button
          className="btn_primary font-medium text-textColor1 w-[6rem]"
          onClick={onClickEdit}
        >
          Edit
        </button>
        <button className="font-medium text-red-500" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default CategoryItem;
