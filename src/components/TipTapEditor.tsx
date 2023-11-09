"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { useState } from "react";
import TipTapMenuBar from "@/components/TipTapMenuBar";
import { Button } from "@/components/ui/button";

type TipTapEditorProps = {}

const TipTapEditor = (props: TipTapEditorProps) => {
  const [editorState, setEditorState] = useState("");
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });
  
  return (
    <>
      <div className="flex">
        {editor && <TipTapMenuBar editor={editor} />}
        <Button>Save</Button>
      </div>
      
      <div className="prose">
        <EditorContent editor={editor}/>
      </div>
    </>
  );
};

export default TipTapEditor;