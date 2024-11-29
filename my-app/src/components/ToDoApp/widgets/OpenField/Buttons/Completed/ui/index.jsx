import { Checkbox } from "../../../../../shared/ui/Checkbox";
export const CompletedLayout = ({ completed, handleCompleted }) => {
	return <Checkbox checked={completed} onChange={handleCompleted} />;
};
