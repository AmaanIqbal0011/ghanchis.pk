'use client'

import { useState } from "react"
import { Size } from "../../../sanity.types"
import { useRouter } from "next/navigation"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandItem, 
    CommandList, CommandInput
} from "../ui/command";

interface SizeSelectorProps {
    size: Size[]
}

export function SizeSelectorComponent({
    size,
}: SizeSelectorProps) {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState<string>("");
   const router = useRouter(); 

   return (
   <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
    <Button
    variant="outline"
    role="combobox"
    aria-expanded={open}
    className="w-full sm:w-auto flex justify-between items-center bg-yellow-500 hover:bg-yellow-700
    hover:text-white text-white font-bold py-2 px-4 rounded overflow-hidden"
    >
        <span className="truncate max-w-[calc(100%-28px)] text-center sm:text-left">
            {value
            ? size.find((size) => size._id === value)?.ageGroup
            : "Filtered by Age"}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
    </Button>
    </PopoverTrigger>
    <PopoverContent 
      className="p-0 w-[var(--radix-popover-trigger-width)] sm:min-w-[200px]"
      align="start"
    >
        <Command>
            <CommandInput
            placeholder="Search Age..."
            className="h-9"
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    const SelectedAge = size.find((c) =>
                    c.ageGroup
                ?.toLocaleLowerCase()
            .includes(e.currentTarget.value.toLowerCase())
        );
        if (SelectedAge?.slug?.current){
            setValue(SelectedAge._id);
            router.push(`/age/${SelectedAge}`);
            setOpen(false);
        }
                }
            }}
            />
            <CommandList>
                <CommandEmpty>No Age Found.</CommandEmpty>
                <CommandGroup className="max-h-[300px] overflow-y-auto">
                    {
                        size.map((size) => (
                            <CommandItem
                            key={size._id}
                            value={size.ageGroup}
                            onSelect={() => {
                                setValue(value === size._id ? "" : size._id);
                                router.push(`/age/${size.ageGroup}`)
                                setOpen(false);
                            }}
                            className="truncate"
                            >
                                {size.ageGroup}
                                <Check
                                className={cn(
                                    "ml-auto h-4 w-4",
                                    value === size._id ? "opacity-100" : "opacity-0"
                        )}
                                />
                            </CommandItem>
                        ))
                    }
                </CommandGroup>
            </CommandList>
        </Command>
    </PopoverContent>
   </Popover>
    )
}
