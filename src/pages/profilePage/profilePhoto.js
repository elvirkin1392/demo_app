import React, { useState, useRef, useCallback } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import { Avatar } from "lib/ui";
import { IconButton } from "@material-ui/core";
import {
  Wallpaper as WallpaperIcon,
  DoneOutline as DoneOutlineIcon,
  Clear as ClearIcon,
} from "@material-ui/icons";
import styles from "./profilePhoto.module.css";

const ProfilePhoto = ({onSave, defaultImage}) => {
  const [user, setUser] = useState({image: defaultImage});
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleSave = useCallback(async () => {
    const editor = editorRef.current;
    if (!editorRef.current) {
      return;
    }

    setSaving(true);
    const image = getScaledImage(editor).toDataURL();
    setUser({ image });
    onSave(image)

    try {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setFile(null);

      setSaving(false);
    } catch (error) {
      console.error(error);

      setSaving(false);
    }
  }, [file, user]);

  const handleRemove = useCallback(async () => {
    setUser({});
  }, [user]);

  return (
    <div>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setFile(acceptedFiles[0]);
        }}
        noClick
        multiple={false}
        style={{
          width: 200,
          height: 200,
          marginBottom: "35px",
        }}
      >
        {({ getRootProps, getInputProps }) => {
          const inputProps = getInputProps();

          return (
            <div className={styles.uploadContainer} {...getRootProps()}>
              <div className={styles.avatarContainer}>
                {file ? (
                  <AvatarEditor
                    ref={editorRef}
                    image={file}
                    width={135}
                    height={135}
                    border={15}
                    borderRadius={150}
                    color={[70, 70, 70, 0.5]}
                    scale={1}
                    rotate={0}
                  />
                ) : (
                  <div className={styles.avatarContainer}>
                    <Avatar size="large" src={user.image} />
                  </div>
                )}
              </div>

              <div className={styles.buttons}>
                <label className={styles.customFileUpload}>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    accept="image/*"
                    {...inputProps}
                    ref={(ref) => {
                      inputProps.ref.current = ref;
                      inputRef.current = ref;
                    }}
                  />
                  <div className={styles.uploadButton}>
                    <IconButton onClick={(e) => e.preventDefault()}>
                      <WallpaperIcon />
                    </IconButton>
                  </div>
                </label>
                {file && (
                  <IconButton
                    onClick={handleSave}
                    loading={saving}
                    style={{ color: "green" }}
                  >
                    <DoneOutlineIcon />
                  </IconButton>
                )}
                {user.image && !file && (
                  <IconButton onClick={handleRemove} style={{ color: "red" }}>
                    <ClearIcon />
                  </IconButton>
                )}
              </div>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

export default ProfilePhoto;

export const getScaledImage = (editor) => {
  const canvas = editor.getImage();

  const baseSize = Math.min(canvas.width, canvas.height);
  const resultSize = 500;

  if (baseSize > resultSize) {
    // redraw with scaling to restrict image size
    const newCanvas = document.createElement("canvas");

    newCanvas.width = resultSize;
    newCanvas.height = resultSize;

    const context = newCanvas.getContext("2d");
    const scaleFactor = resultSize / baseSize;
    context.scale(scaleFactor, scaleFactor);

    context.drawImage(canvas, 0, 0);

    return newCanvas;
  }

  return canvas;
};
