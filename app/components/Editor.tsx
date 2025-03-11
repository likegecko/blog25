"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const Editor = () => {
  const [content, setContent] = useState("");
  return (
    <MDEditor
      data-color-mode="light"
      height={700}
      style={{ whiteSpace: "pre-wrap" }}
      value={content}
      onChange={(value) => setContent(value ?? "")}
    />
  );
};

export default Editor;
