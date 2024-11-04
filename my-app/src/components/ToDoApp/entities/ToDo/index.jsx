import { useState, useRef } from "react";

import { Title } from "../../widgets/OpenToDo/Title";

import styles from "./index.module.css";

import { Link } from "react-router-dom";

export const ToDo = ({
	todoInfo: { id, title, isCompleted, isNew, createdAt },
}) => {
	const [isCurrentCompleted, setIsCurrentCompleted] = useState(isCompleted);

	const titleRef = useRef(null);

	return (
		<li>
			<Link to={`task/${id}`}>
				<article
					className={styles.container}
					style={{ "--extra-width-color": isCompleted ? "#77dd77" : "#E4717A" }}
				>
					<article
						className={styles.todo}
						style={{
							textWrap: "nowrap",
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}
					>
						<h5
							className={styles.title}
							style={{
								textOverflow: "ellipsis",
								overflow: "hidden",
								whiteSpace: "nowrap",
							}}
						>
							{title}
						</h5>

						<section>
							<h6 style={{ display: "inline" }}>Completed:</h6>
							<p style={{ display: "inline" }}>{` ${isCompleted}`}</p>
						</section>
					</article>
				</article>
			</Link>
		</li>
	);
};
