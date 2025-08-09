import { DraggableCardBody } from "@/component/DraggableCard";
import Image from "next/image";

const SkillCard = ({
  name,
  level,
  icon,
}: {
  name: string;
  level: number;
  icon?: string;
}) => (
  <DraggableCardBody className="bg-white dark:bg-zinc-900 text-black dark:text-white border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-4 mb-4">
      {icon && (
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="rounded shadow-md"
        />
      )}
      <h3 className="text-xl font-bold">{name}</h3>
    </div>
    <p className="mb-2 text-sm">{level}% Proficiency</p>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </DraggableCardBody>
);

export default SkillCard;
