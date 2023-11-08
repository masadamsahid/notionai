"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type CreateNoteDialogProps = {}

const CreateNoteDialog = (props: CreateNoteDialogProps) => {
  const [input, setInput] = useState("");
  
  return (
    <Dialog>
      <DialogTrigger>
        <div className="border-dashed border-2 border-green-600 h-full rounded-lg flex items-center justify-center sm:flex-col shadow-xl transition hover:-translate-y-1 flex-row p-4">
          <Plus className="w-6 h-6 text-green-600" strokeWidth={3}/>
          <h2 className="font-semibold text-green-600 sm:mt-2">New Note Book</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            New Note
          </DialogTitle>
          <DialogDescription>
            You can create new not by clicking the button bellow
          </DialogDescription>
        </DialogHeader>
        <form>
          <Input
            placeholder="Name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant="secondary">Cancel</Button>
            <Button type="submit" className="bg-green-600">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;