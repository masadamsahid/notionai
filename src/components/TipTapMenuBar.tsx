import { Editor } from "@tiptap/react";
import {
  Bold,
  Code, CodepenIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic, List, ListOrdered, Quote, Redo,
  Strikethrough, Undo
} from "lucide-react";

type TipTapMenuBarProps = {
  editor: Editor;
}

const TipTapMenuBar = ({ editor }: TipTapMenuBarProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        className={editor.isActive('bold') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('italic') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <Italic className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('strike') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('code') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
      >
        <Code className="w-6 h-6"/>
      </button>
      
      <button
        className={editor.isActive('heading', { level: 1 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('heading', { level: 2 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('heading', { level: 3 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3 className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('heading', { level: 4 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        <Heading4 className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('heading', { level: 5 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        <Heading5 className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('heading', { level: 6 }) ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      >
        <Heading6 className="w-6 h-6"/>
      </button>
      
      <button
        className={editor.isActive('bulletList') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="w-6 h-6"/>
      </button>
      <button
        className={editor.isActive('codeBlock') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <CodepenIcon className="w-6 h-6"/>
      </button>
      
      <button
        className={editor.isActive('blockquote') ? "is-active" : ""}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="w-6 h-6"/>
      </button>
      
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo className="w-6 h-6"/>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default TipTapMenuBar;