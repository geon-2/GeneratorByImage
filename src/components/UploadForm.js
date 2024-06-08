import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/UploadForm.module.css';
import ImageInput from './ImageInput';

export default function UploadForm() {
    const formik = useFormik({
        initialValues: {
            image: null,
            topText: '',
            bottomText: '',
        },
        validationSchema: Yup.object({
            topText: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            bottomText: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
        }),
        onSubmit: async values => {
            const formData = new FormData();
            formData.append('image', values.image);
            formData.append('topText', values.topText);
            formData.append('bottomText', values.bottomText);

            try {
                const apiUrl = 'http://localhost:8080/'
                const response = await axios.post(apiUrl, formData, {headers: {'Content-Type': 'multipart/form-data'}});
            } catch (error) {
                console.error(error);
            }
        }
    
    })

    return (
        <form method="post" className={styles.uploadForm}>
            <ImageInput />
            <input className={styles.textInput} type="text" name="topText" placeholder="Top Text" />
            <input className={styles.textInput} name="bottmText" placeholder="Bottom Text" />
            <button className={styles.submitButton} type="submit">Generate</button>
        </form>
    );
}