import { Button } from "../../../../entities/Buttons/Button";

export const StopButtonLayout = ({ stopTheGame }) => {
	return <Button onClick={stopTheGame}>stop</Button>;
};
