import React from "react";
import { Field } from "react-final-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const FormCKEdtior = ({ name, placeholder, ...props }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => {
        return (
          <div>
            <CKEditor
              editor={ClassicEditor}
              data={input.value}
              config={{ toolbar: ['heading',
                  'bold',
                  'italic',
                  'link',
                  'bulletedList',
                  'numberedList',
                  'blockQuote',
                  'undo',
                  'redo'] }}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                input.onChange(data);
              }}
              onBlur={(event, editor) => {
                input.onBlur();
              }}
              onFocus={(event, editor) => {
                input.onFocus();
              }}
            />
          </div>
        );
      }}
    </Field>
  );
};

export default FormCKEdtior;
