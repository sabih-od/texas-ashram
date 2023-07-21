import {promises as fsPromises, existsSync} from "fs";

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

export const uploadFile = async (dir_path, file_path, file) => {
    await fsPromises.mkdir(dir_path, {recursive: true});
    await fsPromises.writeFile(file_path, file.buffer);
}

export const deleteFileFromUploads = async (app_url, delete_path) => {
    if (delete_path != null && delete_path.includes('uploads') && delete_path.includes(app_url)) {
        delete_path = delete_path.replace(app_url, '.');
        try {
            if (existsSync(delete_path))
                fsPromises.access(delete_path)
                    .then(() => {
                        return fsPromises.unlink(delete_path);
                    });
        } catch (error) {
            console.log('error');
        }
    }
}

export const getRandomFileName = (file) => {
    return generateRandomString(20) + '.' + getFileExtension(file.originalname);
}

export const generateOTP = (length: number = 6) => {
    let result = '';
    const characters = '123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}
