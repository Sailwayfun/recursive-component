import { FolderIcon } from "@heroicons/react/24/solid";

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
      { name: "Music" },
      { name: "Pictures" },
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
  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1.5">
        <FolderIcon className="size-6 text-sky-600" />
        {folder.name}
      </span>

      <ul className="pl-6">
        {folder.folders?.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </li>
  );
}
