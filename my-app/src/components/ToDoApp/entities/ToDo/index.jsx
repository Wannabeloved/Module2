import { useState, useRef } from "react";

import { Title } from "./Title";

import styles from "./index.module.css";

export const ToDo = ({
	todoInfo: { id, title, isCompleted, isNew, createdAt },
	buttons: {
		EditButton,
		SaveButton,
		RemoveButton,
		ConfirmCreateButton,
		CancelCreateButton,
		Completed,
	},
}) => {
	const [isEditing, setIsEditing] = useState(isNew);
	const [isCurrentCompleted, setIsCurrentCompleted] = useState(isCompleted);

	const titleRef = useRef(null);

	return (
		<li>
			<article className={styles.container}>
				<article className={styles.todo}>
					<section className={styles.title + " " + styles.section}>
						<Title
							title={title}
							isInEditingMode={isEditing || isNew}
							titleRef={titleRef}
						/>
					</section>

					<Completed
						id={id}
						isCurrentCompleted={isCurrentCompleted}
						setIsCurrentCompleted={setIsCurrentCompleted}
						createdAt={createdAt}
						title={title}
					/>
				</article>
				<section className={styles.buttonsField}>
					{isNew ? (
						<>
							<ConfirmCreateButton
								titleRef={titleRef}
								isCurrentCompleted={isCurrentCompleted}
							/>
							<CancelCreateButton />
						</>
					) : (
						<>
							{isEditing ? (
								<SaveButton
									{...{
										titleRef,
										setIsEditing,
										isCompleted: isCurrentCompleted,
									}}
								/>
							) : (
								<EditButton setIsEditing={setIsEditing} />
							)}
							<RemoveButton />
						</>
					)}
				</section>
			</article>
		</li>
	);
};
