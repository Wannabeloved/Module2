export const funcForEditToDo = (updateInDB) => {
	return (id, { title, isCompleted, createdAt }) => {
		console.warn({ title, isCompleted, createdAt });
		const updateData = {
			...(title && { title }),
			...(isCompleted && { isCompleted }),
			...(createdAt && { createdAt }),
		};

		updateInDB(id, updateData);
	};
};
