import { FolderIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

import { useState } from "react";

interface Folder {
  name: string;
  folders?: Folder[];
}

const folders: Folder[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [{ name: "Kimi No Na Wa" }, { name: "Weathering with You" }],
      },
      { name: "Music", folders: [] },
      { name: "Pictures", folders: [{ name: "pikachu.jpg" }] },
    ],
  },
];

export default function Folders() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleChildren() {
    setIsOpen((o) => !o);
  }

  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        {folder.folders && folder.folders.length > 0 && (
          <button onClick={toggleChildren}>
            <ChevronRightIcon
              className={`ml-5 size-4 cursor-pointer transition-transform ${
                isOpen && "rotate-90"
              }`}
            />
          </button>
        )}
        {folder.folders && <FolderIcon className="size-6 text-sky-600" />}
        {!folder.folders && <DocumentIcon className="size-6 text-gray-600" />}
        {folder.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
