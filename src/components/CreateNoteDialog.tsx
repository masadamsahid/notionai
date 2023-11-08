"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Loader2, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

type CreateNoteDialogProps = {}

const CreateNoteDialog = (props: CreateNoteDialogProps) => {
  const router = useRouter();
  const [input, setInput] = useState("");
  
  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNoteBook", {
        name: input,
      });
      return response.data;
    },
  });
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your Notebook");
      return;
    }
    
    createNotebook.mutate(undefined, {
      onSuccess: ({note_id}) => {
        console.log("created new note:", { note_id });
        router.push(`/notebook/${note_id}`);
      },
      onError: (error) => {
        console.error(error);
        window.alert("Failed to create notebook");
      },
    });
  }
  
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
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Name..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant="secondary">Cancel</Button>
            <Button type="submit" className="bg-green-600" disabled={createNotebook.isLoading}>
              {createNotebook.isLoading && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
              )}
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;