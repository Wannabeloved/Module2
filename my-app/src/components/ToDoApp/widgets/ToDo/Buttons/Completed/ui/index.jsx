import { Checkbox } from "../../../../../shared/ui/Checkbox";
export const CompletedLayout = ({ isCompleted, handleCompleted }) => {
	return <Checkbox checked={isCompleted} onChange={handleCompleted} />;
};
