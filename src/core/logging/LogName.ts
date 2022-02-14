import { Generator } from 'rotating-file-stream';

export const generateLogFilename: Generator = (timestamp, index): string => {
    if (!timestamp) return 'app.log';

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    return index ? `${day}/${month}/${year}-${hour}:${minute}-${index}-app.log` : `${day}/${month}/${year}-${hour}:${minute}-app.log`;
};
