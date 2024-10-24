import styles from "./styles.module.css";

export const Button = ({ className, type = "button", children, ...props }) => {
	return (
		<button className={`${styles.button} ${className}`} type={type} {...props}>
			{children}
		</button>
	);
};
