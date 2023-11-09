"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import TipTapMenuBar from "@/components/TipTapMenuBar";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/lib/useDebounce";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { NoteType } from "@/lib/db/schema";

type TipTapEditorProps = {
  note: NoteType;
}

const TipTapEditor = ({ note }: TipTapEditorProps) => {
  const [editorState, setEditorState] = useState(note.editorState || `<h1>${note.name}</h1>`);
  
  const saveNote = useMutation({
    mutationFn: async () => {
      const response = await axios.post('/api/saveNote', {
        noteId: note.id,
        editorState,
      });
      return response.data;
    },
  });
  
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });
  
  const debouncedEditorState = useDebounce(editorState, 3000);
  
  useEffect(() => {
    if (debouncedEditorState === '') return;
    saveNote.mutate(undefined, {
      onSuccess: (data) => {
        console.log("Success update!", data);
      },
      onError: (err) => {
        console.error(err);
      },
    });
    
    console.log(debouncedEditorState)
  }, [debouncedEditorState]);
  
  return (
    <>
      <div className="flex">
        {editor && <TipTapMenuBar editor={editor} />}
        <Button disabled variant='outline'>
          {saveNote.isLoading ? "Saving..." : "Save"}
        </Button>
      </div>
      
      <div className="prose">
        <EditorContent editor={editor}/>
      </div>
    </>
  );
};

export default TipTapEditor;