export default function FormRender(props) {
    return props.render(props.formItem || props["form-item"]);
}