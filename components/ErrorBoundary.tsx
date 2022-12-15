import { Component, ErrorInfo, ReactNode } from "react";
import ErrorCard from "./cards/Error";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorName: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorName: "",
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorName: error.name };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorCard errorName={this.state.errorName} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
