import React, { useState, useCallback, useEffect } from "react";

function Rank({ getRank }) {
  const selectList = ["신제품순", "가격낮은순", "가격높은순"];
  const [selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
    getRank(selected);
  };
  return (
    <div className="menu-rank">
      <select
        id="selectActive"
        className="rank-select"
        onChange={handleSelect}
        value={selected}
      >
        <option value="신제품순">신제품순</option>
        <option value="가격낮은순">가격낮은순</option>
        <option value="가격높은순">가격높은순</option>
      </select>
    </div>
  );
}

export default Rank;
