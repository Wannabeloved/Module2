import { Component } from "react";

export class ButtonLayout extends Component {
	render() {
		const { onClick, children } = this.props;
		return (
			<button
				onClick={() => {
					onClick();
				}}
				className={`
					text-red-400 
					min-w-8 
					h-8 
					rounded-md 
					bg-gray-950 
					border-none 
					py-1 
					px-2 
					hover:bg-zinc-800 
					${this.props.className}
				`}
				style={this.props.style}
			>
				{children}
			</button>
		);
	}
}

// export const ButtonLayout = ({ onClick, children }) => {
// 	return (
// 		<button
// 			onClick={() => {
// 				onClick();
// 			}}
// 			className={styles.main}
// 		>
// 			{children}
// 		</button>
// 	);
// };
