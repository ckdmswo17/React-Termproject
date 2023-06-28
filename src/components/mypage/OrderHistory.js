import "./App.css";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import axios from "axios";

import TitleMenu from "./TitleMenu";
import Contents from "./Contents";
import Review from "./Review";

function OrderHistory() {
  return (
    <div>
      <TitleMenu></TitleMenu>
      <Contents></Contents>
    </div>
  );
}

export default OrderHistory;
