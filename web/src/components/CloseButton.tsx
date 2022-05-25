import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="title='Fechar formulário' absolute top-5 right-5 text-[#71717a] transition-colors hover:text-[#27272a] dark:text-secondary dark:hover:text-primary ">
      <X weight="bold" className="h-4 w-4" />
    </Popover.Button>
  );
}
