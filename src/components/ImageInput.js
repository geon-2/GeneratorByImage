'use client'

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../styles/ImageInput.module.css';
import { SlCloudUpload } from "react-icons/sl";

export default function ImageInput() {
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef(null);
    const [file, setFile] = useState(null);

    const onChangeFiles = useCallback((e) => {
        if (e.target.files.length === 0) {
            return;
        }

        if (e.type === "drop") {
            setFile(e.dataTransfer.files[0]);
        } else {
            setFile(e.target.files[0]);
        }
    }, [file]);

    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    
    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    
        setIsDragging(false);
    }, []);
    
    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    
        if (e.dataTransfer && e.dataTransfer.files) {
            setIsDragging(true);
        }
    }, []);
    
    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    
        onChangeFiles(e);
        setIsDragging(false);
    }, [onChangeFiles]);
    
    const initDragEvents = useCallback(() => {
        if (dragRef.current !== null) {
            dragRef.current.addEventListener('dragenter', handleDragIn);
            dragRef.current.addEventListener('dragleave', handleDragOut);
            dragRef.current.addEventListener('dragover', handleDrag);
            dragRef.current.addEventListener('drop', handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDrag, handleDrop]);
    
    const resetDragEvents = useCallback(() => {
        if (dragRef.current !== null) {
            dragRef.current.removeEventListener('dragenter', handleDragIn);
            dragRef.current.removeEventListener('dragleave', handleDragOut);
            dragRef.current.removeEventListener('dragover', handleDrag);
            dragRef.current.removeEventListener('drop', handleDrop);
        }
    });

    useEffect(() => {
        initDragEvents();

        return () => {
            resetDragEvents();
        }
    }, [initDragEvents, resetDragEvents]);

    return (
        <div 
            className={styles.uploadContainer}>
            <input 
                type="file"
                id="imageInput"
                name="image"
                accept="image/*"
                className={styles.imageInput}
                onChange={onChangeFiles}
                />
            <label 
                htmlFor="imageInput" 
                className={`${styles.imageLabel} ${file !== null ? styles.filled : isDragging ? styles.dragging : ''}`}
                ref={dragRef}
            >
                {file !== null ?
                    <img src={URL.createObjectURL(file)} alt="이미지 미리보기" className={styles.imagePreview} />
                : isDragging ?
                    <p className={styles.text}>Drop here</p>
                : <>
                    <div>
                        <SlCloudUpload size="8rem" />
                    </div>
                    <p className={styles.text}>Select an image</p>
                </>
                }
            </label>
        </div>
    );
}