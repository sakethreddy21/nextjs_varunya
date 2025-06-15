"use client"; // Required for Next.js App Router if used inside app/

import React from "react";
import Icon from "./AppIcon";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="text-center p-8 max-w-md">
            <div className="flex justify-center items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 33" fill="none">
                <circle cx="16" cy="16.5" r="12" stroke="#343330" strokeWidth="2" />
                <circle cx="11.5" cy="14" r="1.5" fill="#343330" />
                <circle cx="20.5" cy="14" r="1.5" fill="#343330" />
                <path d="M11 22.5C12.0375 20.7062 13.7787 19.5 16 19.5C18.2213 19.5 19.9625 20.7062 21 22.5" stroke="#343330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-2xl font-medium text-neutral-800">Something went wrong</h1>
              <p className="text-neutral-600 text-base w-8/12 mx-auto">
                We encountered an unexpected error while processing your request.
              </p>
            </div>
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={() => window.location.href = "/"}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center gap-2 transition-colors duration-200 shadow-sm"
              >
                <Icon name="ArrowLeft" size={18} color="#fff" />
                Back
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
