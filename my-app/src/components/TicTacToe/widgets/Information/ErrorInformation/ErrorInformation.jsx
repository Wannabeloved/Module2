import { Component } from "react";
import { ErrorInformationLayout } from "./ErrorInformationLayout";

export class ErrorInformation extends Component {
	render() {
		return <ErrorInformationLayout {...this.props} />;
	}
}

// export const ErrorInformation = () => {
// 	return <ErrorInformationLayout />;
// };
