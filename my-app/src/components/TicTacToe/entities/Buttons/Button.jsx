import { ButtonLayout } from "./ButtonLayout";

export const Button = ({ onClick, children }) => {
	return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};
