import { Quill } from 'react-quill';
 
// import AiInputGenerateModal from '../../../../../components/ui/AiModal/AiInputGenerateModal';
// import BotIcon from '../../../../../components/ui/icons/BotIcon';
// Add sizes to whitelist and register them
const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import('formats/font');
Font.whitelist = [
    'arial',
    'comic-sans',
    'courier-new',
    'georgia',
    'helvetica',
    'lucida',
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
    toolbar: {
        container: '#toolbar',
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
};

// Formats objects for setting up the Quill editor
export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'code-block',
];


// Quill Toolbar component
const EditorToolbar = () => {
    // const [open, setOpen] = useState(false);
    return (
        <>
            <div id="toolbar" className=" !border-none">

                <span className="ql-formats">
                    <select className="ql-header" defaultValue="3">
                        <option value="3">Normal</option>
                        <option value="2">Subheading</option>
                        <option value="1">Heading</option>
                    </select>
                </span>
                <span className="ql-formats">
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                </span>
                <span className="ql-formats">
                    <button className="ql-list" value="ordered" />
                    <button className="ql-list" value="bullet" />
                </span>
                <span className="ql-formats">
                    <select className="ql-align" />
                    <select className="ql-color" />
                </span>
                <span className="ql-formats">
                    <button className="ql-link" />
                    <button className="ql-image" />
                    <button className="ql-video" />
                </span>
            </div>
        </>
    );
};

export default EditorToolbar;