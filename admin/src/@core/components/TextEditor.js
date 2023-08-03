import {CKEditor} from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import {apiUrl, getToken} from "../../services/global";

async function uploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return {
            upload: async () => {
                const data = await loader.file;

                return new Promise((resolve, reject) => {
                    // Your file upload logic here. For example, using an API endpoint.
                    // Replace 'https://example.com/upload' with your actual API endpoint.
                    const uploadUrl = `${apiUrl()}/page-media`;
                    const formData = new FormData();
                    formData.append('media', data);

                    // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token you want to use.
                    const bearerToken = getToken();

                    // Perform the file upload request with the Bearer token in the Authorization header.
                    fetch(uploadUrl, {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${bearerToken}`,
                        },
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            const uploadedUrl = data?.data?.media; // Assuming the server responds with the URL.
                            resolve({default: uploadedUrl});
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            },
        };
    };
}

const TextEditor = ({
                        onInit
                    }) => {
    return (
        <CKEditor
            editor={Editor}
            config={{
                image: {
                    toolbar: [
                        'imageStyle:block',
                        'imageStyle:side',
                        'imageStyle:inline',
                        '|',
                        'toggleImageCaption',
                        'imageTextAlternative',
                        '|',
                        'linkImage'
                    ]
                }
            }}
            onReady={editor => {
                uploadAdapterPlugin(editor)
                onInit(editor)
            }}
        />
    );
};

export default TextEditor