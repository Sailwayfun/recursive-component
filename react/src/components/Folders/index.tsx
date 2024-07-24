import { DocumentIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { FolderIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

interface Node {
  name: string;
  nodes?: Node[];
}

const folders: Node[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [{ name: "Kimi No Na Wa" }, { name: "Weathering with You" }],
      },
      { name: "Music", nodes: [] },
      { name: "Pictures", nodes: [{ name: "pikachu.jpg" }] },
    ],
  },
];

export default function Nodes() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul>
        {folders.map((node) => (
          <FileSystemItem node={node} key={node.name} />
        ))}
      </ul>
    </div>
  );
}

function FileSystemItem({ node }: { node: Node }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleChildren() {
    setIsOpen((o) => !o);
  }

  return (
    <li className="my-1.5" key={node.name}>
      <span className="flex items-center gap-1.5">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={toggleChildren}>
            <ChevronRightIcon
              className={`size-4 cursor-pointer transition-transform ${
                isOpen && "rotate-90"
              }`}
            />
          </button>
        )}
        {node.nodes && (
          <FolderIcon
            className={`size-6 text-sky-600 ${
              node.nodes.length === 0 && "ml-[1.4rem]"
            }`}
          />
        )}
        {!node.nodes && <DocumentIcon className="ml-5 size-6 text-gray-600" />}
        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FileSystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
