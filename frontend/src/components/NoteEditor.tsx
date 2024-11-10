import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NoteEditor({ note, setNote }: any) {
    // Custom toolbar options
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'align': [] }],
            ['link'],
            ['image'],
            ['blockquote', 'code-block']
        ],
    };

    // Handle changes in the editor
    const handleChange = (value: string) => {
        setNote(value);
    };

    return (
        <ReactQuill
            value={note}
            onChange={handleChange}
            placeholder="Write your note here..."
            theme="snow"
            modules={modules}
        />
    );
}

export default NoteEditor;