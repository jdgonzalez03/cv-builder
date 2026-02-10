import type { Skill } from "../../store/cv/types";
import { CloseIcon, EmptyStarIcon, StarIcon } from "../Icons";

interface Props {
	skill: Skill;
	onRemove: () => void;
	onLevelChange: (level: 1 | 2 | 3 | 4 | 5) => void;
}

export function SkillBadge({ skill, onRemove, onLevelChange }: Props) {
	const renderStars = () => {
		return Array.from({ length: 5 }, (_, index) => {
			const starNumber = index + 1;
			const filled = starNumber <= skill.level;

			return (
				<button
					key={starNumber}
					type="button"
					onClick={() => onLevelChange(starNumber as 1 | 2 | 3 | 4 | 5)}
					className="text-xs transition-colors"
				>
					{filled ? <StarIcon /> : <EmptyStarIcon />}
				</button>
			);
		});
	};

	return (
		<div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm dark:bg-gray-800">
			<span className="font-medium text-gray-900 dark:text-white">
				{skill.name}
			</span>

			<div className="flex items-center gap-0.5">{renderStars()}</div>

			<button
				type="button"
				onClick={onRemove}
				className="ml-1 rounded-full p-0.5 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
			>
				<CloseIcon className="size-3" />
			</button>
		</div>
	);
}
