import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function Editor_component() {
  const editorRef: any = useRef(null);
  return (
    <>
      <div className="editor">
        <Editor
        apiKey="7b6k6pbj1crsv3sn1iw06vjxhbmryphmkgxpnyqzowyf3fvd"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            menubar: false,
            fullscreen_native: true,
            plugins: [
              "media",
              "preview",
              "image",
              "fontsize",
              "advlist",
              "autolink",
              "lists",
              "link",
              "colorpicker",
              "image",
              "charmap",
              "fullscreen",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
              "table",
            ],
            toolbar:
              " blocks fontsize | forecolor backcolor  | " +
              "link underline bold italic | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent help | " +
              "  removeformat fullscreen code  media  table hr preview image   ",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </>
  );
}

export default Editor_component;
