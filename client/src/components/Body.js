import React from "react";

const Body = ({ setIsModalOpen }) => {
  return (
    <div className="body">
      <h1>Havvo Group</h1>
      <h2>
        Havvo Group - является агрохолдингом специализирующимся на
        экспорте-импорте свежей плодоовощной продукции, сухофруктов и орехов.
      </h2>
      <p>
        Включает в себя группу компаний: Havvo Agro Food, Havvo Group, Havvo
        Trust, Havvo Noble
      </p>
      <button className="btn btn-main" onClick={() => setIsModalOpen(true)}>
        Спецпредложение
      </button>
    </div>
  );
};

export default Body;
