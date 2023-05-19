import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

export default function Working() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={!isOpen ? "working" : 'hidden'}>
      <p>
        Our site is currently being worked on and some pages or links may not be
        fully functional or available
      </p>
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
}
