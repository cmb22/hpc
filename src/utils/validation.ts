export const datasetIdValidation = (datasetIds: Array<any>): string | null => {
    const errorMessage = 'Dataset IDs must be a comma-separated list of numbers between 1 and 10';

    if (!datasetIds.length) {
        return errorMessage; // No dataset IDs provided, no error
    }

    if (datasetIds.some(id => isNaN(id) || id <= 0 || id > 10)) {
        return errorMessage
    }

    return null; // All IDs are valid
}


export const priorityValidation = (priority?: string): string | null => {
    const errorMessage = 'Priority must be a number between 0.0 and 1.0';

    if (!priority) {
        return errorMessage; // No priority provided, error
    }

    const priorityValue = parseFloat(priority);
    if (isNaN(priorityValue) || priorityValue < 0 || priorityValue > 1) {
        return errorMessage; // Invalid priority value
    }

    return null; // Priority is valid
}