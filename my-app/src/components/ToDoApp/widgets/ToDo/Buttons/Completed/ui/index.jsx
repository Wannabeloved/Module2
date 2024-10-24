import { Checkbox } from "../../../../../shared/ui/Checkbox";
export const CompletedLayout = ({ isCurrentCompleted, handleCompleted }) => {
	return <Checkbox checked={isCurrentCompleted} onChange={handleCompleted} />;
};
