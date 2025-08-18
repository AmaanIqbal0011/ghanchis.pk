'use client'

import { useState, KeyboardEvent } from "react";
import { Size } from "../../../sanity.types";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Command, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandList, 
  CommandInput 
} from "../ui/command";

interface SizeSelectorProps {
  size: Size[];
}

export function SizeSelectorComponent({ size }: SizeSelectorProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== "Enter") return;

    const searchValue = e.currentTarget.value.toLowerCase();
    const selectedSize = size.find((s) =>
      s.ageGroup?.some((age : string) => age.toLowerCase().includes(searchValue))
    );

    const selectedAge = selectedSize?.ageGroup?.find((age : string) =>
      age.toLowerCase().includes(searchValue)
    );

    if (selectedAge) {
      setValue(selectedAge);
      router.push(`/age/${selectedAge}`);
      setOpen(false);
    }
  };

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
            {value || "Filtered by Age"}
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
            onKeyDown={handleKeyDown}
          />
          <CommandList>
            <CommandEmpty>No Age Found.</CommandEmpty>
            {size.map((s) => (
              <CommandGroup key={s._id} heading={s._id}>
                {s.ageGroup?.map((age : string) => (
                  <CommandItem
                    key={age}
                    value={age}
                    onSelect={() => {
                      setValue(age);
                      router.push(`/age/${age}`);
                      setOpen(false);
                    }}
                    className="truncate"
                  >
                    {age}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === age ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
