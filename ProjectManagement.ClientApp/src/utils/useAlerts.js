import { useState } from "react";

export default function useAlerts() {
    const [alert, setAlert] = useState({
        open: false,
        severity: "success",
        message: "",
    });

    const showSuccess = (message) =>
        setAlert({ open: true, severity: "success", message });

    const showError = (message) =>
        setAlert({ open: true, severity: "error", message });

    const closeAlert = (_, reason) => {
        if (reason === "clickaway") return;
        setAlert((prev) => ({ ...prev, open: false }));
    };

    return { alert, showSuccess, showError, closeAlert };
}
