export const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export const getFileExtension = (filename) => {
    const extensionIndex = filename.lastIndexOf('.');
    if (extensionIndex === -1) {
        return ''; // No extension found
    }
    return filename.slice(extensionIndex + 1);
}
